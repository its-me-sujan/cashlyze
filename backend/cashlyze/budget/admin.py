from django.contrib import admin
from budget.models import *

admin.site.register(Account)
admin.site.register(Expense)
admin.site.register(Income)
admin.site.register(Transfer)
admin.site.register(TransactionHistory)
# Register your models here.
