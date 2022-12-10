from django.db import models
from decimal import Decimal


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
        return self.salesperson_name


class SalesRecord(models.Model):
    salesperson_name = models.ForeignKey(
        SalesPerson,
        related_name='salesperson_names',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    customer_name = models.ForeignKey(
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
        return f"{self.salesperson_name}, {self.customer_name}, {self.automobile}, {self.price}"


class SalesHistory(models.Model):
    employee_number = models.ForeignKey(
        SalesPerson,
        related_name='employee_numbers',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    salesperson_name = models.ForeignKey(
        SalesRecord,
        related_name='salesperson_names',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    customer_name = models.ForeignKey(
        SalesRecord,
        related_name='customer_names',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    automobile = models.ForeignKey(
        SalesRecord,
        related_name='vins',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    price = models.ForeignKey(
        SalesRecord,
        related_name = 'prices',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
