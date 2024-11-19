from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import exceptions, serializers
from rest_framework.fields import CharField
from rest_framework.serializers import (ModelSerializer, SerializerMethodField)
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from utils.generics import get_pclaim



class TokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    Custom TokenObtainPairSerializer class that will add username to the token payload
    This can then be decoded by client to use the available data
    """

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["username"] = user.username
        token["pclaim"] = get_pclaim(user)
        token["userDetail"] = (AuthUserSerializer(user).data)
        return token

class AuthUserSerializer(ModelSerializer):
    """
    UserSerializer that serialize django's user
    """


    class Meta:
        model = get_user_model()
        fields = (
            "id",
            "first_name",
            "last_name",
            "email",
            "date_joined",
            "last_login",
            "is_active",
            "is_superuser",
        )
        read_only_fields = (
            "date_joined",
            "last_login",
            "is_active",
            "is_superuser",
        )

    def get_full_name(self, instance):
        if hasattr(instance, "get_full_name"):
            return instance.get_full_name()
        return ""



    
        
