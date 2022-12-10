from django.db import models
from decimal import Decimal
import json


# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=100, default=False)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class Customer(models.Model):
    customer_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=14)

    def __str__(self):
        return self.customer_name


class SalesPerson(models.Model):
    salesperson_name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(unique=True)

    def __str__(self):
        return f"{self.salesperson_name}, {self.employee_number}"


class SalesRecord(models.Model):
    salesperson = models.ForeignKey(
        SalesPerson,
        related_name='salesperson_names',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )


    customer = models.ForeignKey(
        Customer,
        related_name='customer_names',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )


    automobile = models.ForeignKey(
        AutomobileVO,
        related_name='vins',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    price = models.DecimalField(max_digits=8, decimal_places=2, default=Decimal('20000.00'))

    def __str__(self):
        return f"salesrecord object: {self.salesperson} {self.automobile}"
