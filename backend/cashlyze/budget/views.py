from rest_framework import generics, viewsets, status
from .models import Expense
from .serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from django.db import transaction
from rest_framework.exceptions import PermissionDenied


class ExpenseViewset(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    
class IncomeViewset(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer
    permission_classes = [IsAuthenticated]


    def create(self, request, *args, **kwargs):
        user = self.request.user

        if not user.is_authenticated:
            return Response({'message': 'User not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        income = serializer.save()

        account = income.account
        account.balance += income.amount
        account.save()
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class AccountViewset(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return super().get_queryset().filter(user=self.request.user)

class TransactionHistoryViewset(generics.ListAPIView):
    queryset = TransactionHistory.objects.all()
    serializer_class = TransactionHistorySerializer
class RegisterView(APIView):
    def post(self, request):
        print("********")
        print(request.data)
        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
