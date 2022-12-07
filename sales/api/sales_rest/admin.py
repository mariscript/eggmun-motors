from django.contrib import admin
from .models import Customer, SalesPerson, SalesRecord, AutomobileVO

# Register your models here.
@admin.register(Customer)
class Customer(admin.ModelAdmin):
    pass


@admin.register(SalesPerson)
class SalesPerson(admin.ModelAdmin):
    pass


@admin.register(SalesRecord)
class SalesRecord(admin.ModelAdmin):
    pass


@admin.register(AutomobileVO)
class AutomobileVO(admin.ModelAdmin):
    pass
