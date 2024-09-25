from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Account(models.Model):
    ACCOUNT_TYPES = (('wallet', 'Wallet'), ('bank', 'Bank Account'))
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    account_type = models.CharField(max_length=10, choices=ACCOUNT_TYPES)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return f"{self.user.username} - {self.account_type} ({self.balance})"

class Income(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    date = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"Income: {self.amount} to {self.account.account_type} on {self.date}"

class Expense(models.Model):
    CATEGORY = (
        ('food', 'Food'),
        ('social_life', 'Social Life'),
        ('pets', 'Pets'),
        ('transport', 'Transport'),
        ('culture', 'Culture'),
        ('household', 'Household'),
        ('apparel', 'Apparel'),
        ('beauty', 'Beauty'),
        ('health', 'Health'),
        ('education', 'Education'),
        ('gift', 'Gift'),
        ('bank', 'Bank Account'),  # You can keep this if you need it
    )
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    date = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100, choices=CATEGORY)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Expense: {self.amount} from {self.account.account_type} on {self.date} ({self.category})"

class TransactionHistory(models.Model):
    TRANSACTION_TYPES = (('income', 'Income'), ('expense', 'Expense'))

    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    transaction_type = models.CharField(max_length=7, choices=TRANSACTION_TYPES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField(auto_now_add=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.transaction_type.capitalize()}: {self.amount} on {self.date}"
