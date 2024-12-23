from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from drf_spectacular.views import (SpectacularSwaggerView, SpectacularAPIView)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('budget.urls')),
    path("api/auth/", include("auth_app.urls")),
]

urlpatterns += [
    path("swagger/schema/", SpectacularAPIView.as_view(), name="schema"),
        path(
            "swagger/doc/",
            SpectacularSwaggerView.as_view(url_name="schema"),
            name="swagger-ui",
        ),
]
