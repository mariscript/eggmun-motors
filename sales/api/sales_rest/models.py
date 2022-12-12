from django.db import models
from decimal import Decimal
from django.urls import reverse


# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=100, default=False)
    vin = models.CharField(max_length=17)

    def get_api_url(self):
        return reverse('api_automobile_vo', kwargs={'pk': self.id})

    def __str__(self):
        return self.vin


class Customer(models.Model):
    customer_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=14)

    def get_api_url(self):
        return reverse('api_customer', kwargs={'pk': self.id})

    def __str__(self):
        return self.customer_name


class SalesPerson(models.Model):
    salesperson_name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(unique=True)

    def get_api_url(self):
        return reverse('api_salesperson', kwargs={'pk': self.id})

    def __str__(self):
        return f"salesperson: {self.salesperson_name}, employee number: {self.employee_number}"


class SalesRecord(models.Model):
    salesperson = models.ForeignKey(
        SalesPerson,
        related_name='+',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )


    customer = models.ForeignKey(
        Customer,
        related_name='customers',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )


    automobile = models.ForeignKey(
        AutomobileVO,
        related_name='automobiles',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    price = models.DecimalField(max_digits=8, decimal_places=2, default=Decimal('20000.00'))

    def get_api_url(self):
        return reverse('api_salesrecord', kwargs={'pk': self.id})

    def __str__(self):
        return f"sales: {self.salesperson} customer: {self.customer} car: {self.automobile}"
