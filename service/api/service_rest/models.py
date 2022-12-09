from django.db import models
from django.urls import reverse

# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True, null=True)
    import_href = models.CharField(max_length=100, default=False)

    def __str__(self):
        return self.vin
    
    class Meta:
      verbose_name = "Automobile"

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_technician", kwargs={"pk": self.id})

    def __str__(self):
        return f"{self.name}: {self.employee_number}"

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

    def get_api_url(self):
        return reverse("api_appointment", kwargs={"pk": self.vin})

    def __str__(self):
        return f"{self.customer_name}: {self.vin}"