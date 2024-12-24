from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import localtime


from budget.choices import  IncomeCategory, ExpenseCategory, TransactionType


class Account(models.Model):
    name = models.CharField(max_length=100, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return f"{self.user.username} - {self.name} ({self.balance})"

# class Income(models.Model):
#     category = models.CharField(max_length=100, choices=IncomeCategory.choices, null=True)
#     amount = models.DecimalField(max_digits=10, decimal_places=2)
#     account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="incomes")
#     description = models.TextField(blank=True, null=True)
    
#     date_created = models.DateTimeField(auto_now_add=True, null=True)

#     def __str__(self):
#         return f"{self.amount} to {self.account.name}"

# class Expense(models.Model):
#     category = models.CharField(max_length=100, choices=ExpenseCategory.choices, null=True)
#     amount = models.DecimalField(max_digits=10, decimal_places=2)
#     account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="expenses")
#     description = models.TextField(blank=True, null=True)

#     date_created = models.DateTimeField(auto_now_add=True, null=True)

#     def __str__(self):
#         return f"{self.amount} from {self.account.name}"
    
# class Transfer(models.Model):
#     amount = models.DecimalField(max_digits=10, decimal_places=2)
#     from_account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="transfers_from")
#     to_account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="transfers_to")
#     description = models.TextField(blank=True)

#     date_created = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"{self.amount} from {self.from_account} to {self.to_account}"

# # class TransactionHistory(models.Model):
# #     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="transaction_histories",blank=True, null=True)
# #     transaction_type = models.CharField(max_length=50, choices=TransactionType.choices, null=True)
# #     amount = models.DecimalField(max_digits=10, decimal_places=2)
# #     from_account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="transactions_from",blank=True, null=True)
# #     to_account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="transactions_to",blank=True, null=True)
# #     description = models.TextField(blank=True, null=True)

# #     date_created = models.DateTimeField(auto_now_add=True, null=True)

# #     def __str__(self):
# #         formatted_date = localtime(self.date_created).strftime("%Y-%m-%d")
# #         return f"{self.transaction_type.capitalize()}: {self.amount} on {formatted_date}"
    
class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="transactions",blank=True, null=True)
    transaction_type = models.CharField(max_length=50, choices=TransactionType.choices, null=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    income_category = models.CharField(max_length=100, choices=IncomeCategory.choices, null=True, blank=True)
    expense_category = models.CharField(max_length=100, choices=ExpenseCategory.choices, null=True, blank=True)
    from_account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="transactions_from",blank=True, null=True)
    to_account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="transactions_to",blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        formatted_date = localtime(self.date_created).strftime("%Y-%m-%d")
        return f"{self.transaction_type.capitalize()}: {self.amount} on {formatted_date}"
    
