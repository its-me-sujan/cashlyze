from django.urls import path,include
from .views import *
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


router = DefaultRouter()
router.register(r'expenses', ExpenseViewset, basename='expense')
router.register(r'incomes', IncomeViewset, basename='income')
router.register(r'accounts', AccountViewset, basename='account')

urlpatterns = [
    path('',include(router.urls)),
    path('transaction-historys/', TransactionHistoryViewset.as_view(), name='transaction-history'), 
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # /api/token/
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), # /api/token/refresh/

]