from django.urls import include, path
from rest_framework.routers import DefaultRouter

from auth_app import views

router = DefaultRouter()

router.register("token", views.TokenObtainPairViewSet, basename="token")
router.register("token/refresh", views.TokenRefreshViewSet, basename="token_refresh")
router.register("token/clear", views.ClearTokenViewSet, basename="token_clear")


urlpatterns = [
    path("", include(router.urls))
]