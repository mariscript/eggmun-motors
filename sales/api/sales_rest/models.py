from django.db import models
# from django.urls import reverse

# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=100)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class Customer(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_number = models.PositiveSmallIntegerField(unique=True)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=14)

    def __str__(self):
        return self.customer_name


class SalesPerson(models.Model):
    sales_person_name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(unique=True)

    def __str__(self):
        return self.sales_person_name


class SalesRecord(models.Model):
    price = models.DecimalField(max_digits=8, decimal_places=2)
    sales_record_number = models.PositiveSmallIntegerField(unique=True)
    customer_number = models.ForeignKey(
        Customer,
        related_name='record_customer_number',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    employee_number = models.ForeignKey(
        SalesPerson,
        related_name='record_employee_number',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name='record_vin',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    def __str__(self):
        return(str(self.sales_record_number))

# class SalesPersonHistory(models.Model)
#     employee_number = models.ForeignKey(
#         SalesPerson,
#         related_name=''
#     )
