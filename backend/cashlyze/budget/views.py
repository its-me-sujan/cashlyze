from rest_framework import generics, viewsets, status
from .models import Expense
from .serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView

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
class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
