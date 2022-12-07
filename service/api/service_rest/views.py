from django.shortcuts import render
from django.http import JsonResponse
from .encoders import TechnicianEncoder, AppointmentEncoder
from .models import AutomobileVO, Technician, Appointment
from django.views.decorators.http import require_http_methods
import json


# Create your views here.
@require_http_methods(["GET", "POST"])
def api_technician(request):
    if request.method == "GET":
        technician = Technician.objects.all().order_by('name')
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
        except:
            response = JsonResponse({"message": "Tech could not be created"})
            response.status_code = 404
            return response
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )

@require_http_methods(["GET", "PUT", "DELETE"])
def api_appointment(request, pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False
            )
    elif request.method == "DELETE":
            count, _ = Appointment.objects.filter(id=id).delete()
            return JsonResponse({"deleted": count > 0})
            Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

