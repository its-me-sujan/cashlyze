from rest_framework import generics, viewsets
from .models import Expense
from .serializers import *

class ExpenseViewset(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    
class IncomeViewset(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer
    
class AccountViewset(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class TransactionHistoryViewset(generics.ListAPIView):
    queryset = TransactionHistory.objects.all()
    serializer_class = TransactionHistorySerializer
