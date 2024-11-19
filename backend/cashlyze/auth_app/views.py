from django.forms import CharField, IntegerField
import jwt
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.timezone import now
from drf_spectacular.utils import OpenApiExample, extend_schema, inline_serializer

from rest_framework.response import Response
from rest_framework_simplejwt.exceptions import InvalidToken
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import mixins, permissions, status, viewsets
from rest_framework import generics
from rest_framework import status as STATUS
from rest_framework_simplejwt.utils import aware_utcnow, datetime_from_epoch

from auth_app import serializers

from utils.generics import get_pclaim
from utils.serializers import ChoicesSerializer, EmptySerializer


def refresh_cookie(response):
    args = ["refresh", response.data["refresh"]]
    kwargs = {"httponly": True}
    response.set_cookie(*args, **kwargs)
    return response

class CustomTokenObtainPairAPIViewSet(TokenObtainPairView):
    """
    Login API View to receive token pair.
    """

    serializer_class = serializers.TokenObtainPairSerializer

    @extend_schema(
        request=serializer_class,
        examples=[
            OpenApiExample(
                name="Example1",
                value={
                    "refresh": "text",
                    "access": "text",
                    "user_detail": {
                        "username": "username",
                        "full_name": "Full Name",
                        "role": "role",
                        "id": 1,
                        "marketagent": "marketagent",
                    },
                },
                response_only=True,
            ),
        ],
    )
    def post(self, request, *args, **kwargs):
        data = request.data
        username = data["username"]
        is_mobile = False
        if "isMobile" in data:
            is_mobile = data["isMobile"]
        try:
            u = User.objects.get(username=username)
            agent_role = u.profile.role.role

            if u.is_superuser and is_mobile:
                return Response(
                    {
                        "message": "Super User cannot login via Mobile. Please Login via Web."
                    },
                    status=status.HTTP_403_FORBIDDEN,
                )
            if agent_role.lower() == "transport entry" and is_mobile:
                return Response(
                    {"message": "Transport entrier cannot login in the Mobile."},
                    status=status.HTTP_403_FORBIDDEN,
                )

        except Exception as e:
            pass
        return super().post(request, *args, **kwargs)


class CustomTokenRefreshView(TokenRefreshView):
    """
    Custom TokenRefreshView class that takes refresh token from cookies when refresh is not present in post data.
    It also returns refresh token if ROTATE_REFRESH_TOKENS is true and it gets 'refresh' in response's data.
    """

    @extend_schema(
        responses=inline_serializer(
            name="TokenRefreshResponseSerializer",
            fields={
                "access": CharField(),
                "user_detail": {
                    "username": CharField(),
                    "full_name": CharField(),
                    "id": IntegerField(),
                    "role": CharField(),
                },
            },
        )
    )
    def post(self, request, *args, **kwargs):
        """
        API that refreshes access token. This API will try to take refresh token from cookies when refresh is not present in post data.
        """
        response = super().post(request=request, *args, **kwargs)

        try:
            # Getting user detail by decoding access token
            jwt_decoded = jwt.decode(
                response.data["access"], settings.SECRET_KEY, "HS256"
            )
            if "user_id" in jwt_decoded:
                try:
                    user = get_user_model().objects.get(id=jwt_decoded["user_id"])
                    response.data["user_detail"] = {
                        "username": user.username,
                        "full_name": user.get_full_name(),
                        "id": user.pk,
                    }

                except Exception as e:
                    raise e
        except Exception as e:
            if isinstance(e, InvalidToken):
                raise e
            response = Response(
                {"message": str(e)}, status=status.HTTP_401_UNAUTHORIZED
            )
            response.delete_cookie("refresh")

        return response


class TokenObtainPairViewSet(viewsets.GenericViewSet, TokenObtainPairView):
    """
    Custom TokenObtainPairViewSet class that will send refresh token as an http only cookie.
    """

    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.TokenObtainPairSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context

    @extend_schema(
        # tags=['Token'],
        responses=inline_serializer(
            name="TokenObtainPairResponseSerializer",
            fields={
                "access": serializers.CharField(),
                "refresh": serializers.CharField(),
            },
        )
    )
    def create(self, request, *args, **kwargs):
        """
        API that will return access and refresh token. It will also return refresh token as an http only cookie.
        """
        response = super().post(request=request, *args, **kwargs)
        response = refresh_cookie(response)
        # Uncomment the line below if you don't want to send refresh token as response data
        # response.data.pop('refresh')
        return response


class TokenRefreshViewSet(viewsets.GenericViewSet, TokenRefreshView):
    """
    Custom TokenRefreshViewSet class that takes refresh token from cookies when refresh is not present in post data.
    It also returns refresh token if ROTATE_REFRESH_TOKENS is true and it gets 'refresh' in response's data.
    """

    permission_classes = [permissions.AllowAny]

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context["request"] = self.request
        return context

    @extend_schema(
        # tags=['Token'],
        responses=inline_serializer(
            name="TokenRefreshResponseSerializer",
            fields={
                "access": serializers.CharField(),
            },
        )
    )
    def create(self, request, *args, **kwargs):
        """
        API that refreshes access token. This API will try to take refresh token from cookies when refresh is not present in post data.
        """
        key_name = "pclaim"
        if not "refresh" in request.data.keys():
            if "refresh" in request.COOKIES.keys():
                request.data["refresh"] = request.COOKIES["refresh"]
            else:
                response = Response(
                    {"message": "NoError", "error": "No Refresh Token"},
                    status=status.HTTP_401_UNAUTHORIZED,
                )
                response.delete_cookie("refresh")
                return response
        response = super().post(request=request, *args, **kwargs)
        try:
            if response.status_code == 200 and "access" in response.data:
                # Getting user detail by decoding access token
                jwt_decoded = jwt.decode(
                    response.data["access"], settings.SECRET_KEY, "HS256"
                )
                if "user_id" in jwt_decoded:
                    if key_name in jwt_decoded:
                        user = get_user_model().objects.get(id=jwt_decoded["user_id"])
                        pclaim = get_pclaim(user)
                        if jwt_decoded[key_name] != pclaim:
                            raise InvalidToken
                if "refresh" in response.data.keys():
                    response = refresh_cookie(response)
                    # Uncomment the line below if you don't want to send refresh token as response data
                    # response.data.pop('refresh')
        except Exception as e:
            if isinstance(e, InvalidToken):
                raise e
            print(e)
            response = Response({"message": e}, status=status.HTTP_401_UNAUTHORIZED)
            response.delete_cookie("refresh")
        return response


class ClearTokenViewSet(viewsets.GenericViewSet):
    """
    Create ViewSet to clear refresh token in client.
    """

    permission_classes = [permissions.AllowAny]
    serializer_class = EmptySerializer

    def create(self, request, *args, **kwargs):
        """
        API that will clear the http only refresh token for client.
        """
        OutstandingToken.objects.filter(expires_at__lte=aware_utcnow()).delete()
        if "refresh" in request.COOKIES:
            refresh = request.COOKIES["refresh"]
            jwt_decoded = jwt.decode(refresh, settings.SECRET_KEY, "HS256")
            if (
                "jti" in jwt_decoded
                and "exp" in jwt_decoded
                and "username" in jwt_decoded
            ):
                jti = jwt_decoded["jti"]
                exp = jwt_decoded["exp"]
                username = jwt_decoded["username"]
                token = OutstandingToken.objects.filter(
                    jti=jti,
                    user__username=username,
                    expires_at=datetime_from_epoch(exp),
                )
                token.delete()

        response = Response()
        response.delete_cookie("refresh")
        return response
