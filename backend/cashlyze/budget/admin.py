from django.contrib import admin
from .models import *

admin.site.register(Account)
admin.site.register(Expense)
admin.site.register(Income)
admin.site.register(TransactionHistory)
# Register your models here.
