from rest_framework import serializers
from .models import Account, Income, Expense, TransactionHistory

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = "__all__"

class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = "__all__"

class ExpenseSerializer(serializers.ModelSerializer):
    account_type = serializers.ReadOnlyField(source='account.account_type')  

    class Meta:
        model = Expense
        fields = ['id', 'date', 'amount', 'category', 'description', 'account_type'] 


class TransactionHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TransactionHistory
        fields = "__all__"