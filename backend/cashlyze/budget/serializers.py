from rest_framework import serializers
from .models import Account, Income, Expense, TransactionHistory
from django.contrib.auth.models import User

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = "__all__"

class IncomeSerializer(serializers.ModelSerializer):
    account_type = serializers.ReadOnlyField(source='account.account_type')
    class Meta:
        model = Income
        fields = ['id', 'account_type', 'date', 'amount']


class ExpenseSerializer(serializers.ModelSerializer):
    account_type = serializers.ReadOnlyField(source='account.account_type')  

    class Meta:
        model = Expense
        fields = ['id', 'date', 'account_type', 'amount', 'category', 'description'] 


class TransactionHistorySerializer(serializers.ModelSerializer):
    account_type = serializers.ReadOnlyField(source='account.account_type')  
    class Meta:
        model = TransactionHistory
        fields = ['id','date',  'account_type', 'transaction_type', 'amount', 'description']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user