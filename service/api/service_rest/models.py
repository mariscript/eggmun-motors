from django.db import models

# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True, null=True)

    def __str__(self):
        return self.name 

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField(unique=True)

class Appointment(models.Model):
    customer_name = models.CharField(max_length=100)
    vin = models.CharField(max_length=17, unique=True, null=True)
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=200)
    vip = models.BooleanField(default=False)
    status = models.CharField(max_length=200, default=False)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
