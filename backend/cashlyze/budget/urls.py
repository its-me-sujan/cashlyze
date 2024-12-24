from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = DefaultRouter()
router.register(r'expenses', ExpenseViewset, basename='expense')
router.register(r'incomes', IncomeViewset, basename='income')
router.register(r'transfers', TransferViewset, basename='transfer')
router.register(r'accounts', AccountViewset, basename='account')

urlpatterns = [
    path('',include(router.urls)),
    path('transaction-historys/', TransactionHistoryViewset.as_view(), name='transaction-history'), 
    path('register/', RegisterView.as_view(), name='register'),


]