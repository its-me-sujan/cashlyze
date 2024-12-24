from rest_framework import generics, viewsets, status
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from django.db import transaction
from rest_framework.exceptions import PermissionDenied


# class ExpenseViewset(viewsets.ModelViewSet):
#     queryset = Expense.objects.all()
#     serializer_class = ExpenseSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         return super().get_queryset().filter(account__user=self.request.user)

#     def create(self, request, *args, **kwargs):
#         user = self.request.user

#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         expense = serializer.save()

#         account = expense.account
#         account.balance -= expense.amount
#         account.save()

#         TransactionHistory.objects.create(
#             user=user,
#             transaction_type="expense",  
#             amount=expense.amount,
#             from_account=account,
#             description=f"Expense deducted: {expense.amount} from {account.name}",
#         )
        
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
    
# class IncomeViewset(viewsets.ModelViewSet):
#     queryset = Income.objects.all()
#     serializer_class = IncomeSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         return super().get_queryset().filter(account__user=self.request.user)
    
#     def create(self, request, *args, **kwargs):
#         user = self.request.user

#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         income = serializer.save()

#         account = income.account
#         account.balance += income.amount
#         account.save()

#         TransactionHistory.objects.create(
#             user=user,
#             transaction_type="income", 
#             amount=income.amount,
#             to_account=account,
#             description=f"Income added: {income.amount} to {account.name}",
#         )
        
#         return Response(serializer.data, status=status.HTTP_201_CREATED)

# class TransferViewset(viewsets.ModelViewSet):
#     queryset = Transfer.objects.all()
#     serializer_class = TransferSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         return super().get_queryset().filter(from_account__user=self.request.user)
    
#     @transaction.atomic
#     def create(self, request, *args, **kwargs):
#         user = self.request.user

#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         transfer = serializer.save()

#         from_account = transfer.from_account
#         from_account.balance -= transfer.amount
#         from_account.save()
        
#         to_account = transfer.to_account
#         to_account.balance += transfer.amount
#         to_account.save()

#         TransactionHistory.objects.create(
#             user=user,
#             transaction_type="transfer", 
#             amount=transfer.amount,
#             from_account=from_account,
#             to_account=to_account,
#             description=f"Transfer: {transfer.amount} from {from_account.name} to {to_account.name}",
#         )
        
#         return Response(serializer.data, status=status.HTTP_201_CREATED)

class AccountViewset(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return super().get_queryset().filter(user=self.request.user)

# class TransactionHistoryViewset(generics.ListAPIView):
#     queryset = TransactionHistory.objects.all()
#     serializer_class = TransactionHistorySerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         return super().get_queryset().filter(user=self.request.user)
    
class TransactionViewset(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return super().get_queryset().filter(user=self.request.user)

    @transaction.atomic
    def create(self, request, *args, **kwargs):
        user = self.request.user

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        transaction = serializer.save()

        if transaction.transaction_type == "income":
            account = transaction.to_account
            account.balance += transaction.amount
            account.save()
            Transaction.objects.create(
                user=user,
                transaction_type="income", 
                amount=transaction.amount,
                income_category=transaction.income_category,
                to_account=account,
                from_account=account,
                description=transaction.description,
            )
        elif transaction.transaction_type == "expense":
            account = transaction.from_account
            account.balance -= transaction.amount
            account.save()
            Transaction.objects.create(
                user=user,
                transaction_type="expense",  
                amount=transaction.amount,
                expense_category=transaction.expense_category,
                from_account=account,
                to_account=account,
                description=transaction.description,
            )
        else:
            from_account = transaction.from_account
            from_account.balance -= transaction.amount
            from_account.save()
            
            to_account = transaction.to_account
            to_account.balance += transaction.amount
            to_account.save()

            Transaction.objects.create(
                user=user,
                transaction_type="transfer", 
                amount=transaction.amount,
                from_account=from_account,
                to_account=to_account,
                description=transaction.description,
            )
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class RegisterView(APIView):
    def post(self, request):
        print(request.data)
        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
