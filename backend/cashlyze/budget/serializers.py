from rest_framework import serializers
from .models import Account, Income, Expense, Transfer, TransactionHistory
from django.contrib.auth.models import User

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = "__all__"

class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ['id','category', 'account', 'amount', 'description', 'date_created']


class ExpenseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expense
        fields = ['id','category', 'account', 'amount', 'description', 'date_created'] 

    def validate(self, attrs):
        account = attrs['account']
        if account.balance < attrs['amount']:
            raise serializers.ValidationError(f'Insufficient balance in {account.name}')
        return attrs

class TransferSerializer(serializers.ModelSerializer):

    class Meta:
        model = Transfer
        fields = ['id', 'from_account', 'to_account', 'amount', 'description', 'date_created'] 

    def validate(self, attrs):
        account = attrs['from_account']
        if account.balance < attrs['amount']:
            raise serializers.ValidationError(f'Insufficient balance in {account.name}')
        return attrs
    
    
class TransactionHistorySerializer(serializers.ModelSerializer):
    date_created = serializers.DateTimeField(format="%Y-%m-%d")
    class Meta:
        model = TransactionHistory
        fields = ['id','date_created', 'transaction_type', 'amount', 'description']

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