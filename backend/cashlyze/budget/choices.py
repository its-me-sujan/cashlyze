from django.db import models

class AccountType(models.TextChoices):
    WALLET = ("wallet", "Wallet")
    BANK = ("bank", "Bank")

class IncomeCategory(models.TextChoices):
    SALARY = ("salary", "Salary")
    BUSINESS = ("business", "Business")
    RENTAL_INCOME = ("rental_income", "Rental Income")
    OTHER = ("other", "Other")

class ExpenseCategory(models.TextChoices):
    FOOD = ("food", "Food")
    SOCIAL_LIFE = ("social_life", "Social Life")
    PETS = ("pets", "Pets")
    TRANSPORT = ("transport", "Transport")
    CULTURE = ("culture", "Culture")
    HOUSEHOLD = ("household", "Household")
    APPAREL = ("apparel", "Apparel")
    BEAUTY = ("beauty", "Beauty")
    HEALTH = ("health", "Health")
    EDUCATION = ("education", "Education")
    GIFT = ("gift", "Gift")

class TransactionType(models.TextChoices):
    INCOME = ("income", "Income")
    EXPENSE = ("expense", "Expense")
    TRANSFER = ("transfer", "Transfers")