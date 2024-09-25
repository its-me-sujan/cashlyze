from rest_framework import generics, viewsets
from .models import Expense
from .serializers import ExpenseSerializer

class ExpenseViewset(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
