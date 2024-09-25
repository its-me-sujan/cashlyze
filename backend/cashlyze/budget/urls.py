from django.urls import path,include
from .views import ExpenseViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'expenses', ExpenseViewset, basename='expense')

urlpatterns = [
    path('',include(router.urls)),
]