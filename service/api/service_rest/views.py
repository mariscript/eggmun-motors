from django.shortcuts import render
from django.http import JsonResponse
from .encoders import TechnicianEncoder, AppointmentEncoder
from .models import AutomobileVO, Technician, Appointment
from django.views.decorators.http import require_http_methods
import json


# Create your views here.

# Technician Detail
@require_http_methods(["DELETE", "GET", "PUT"])
def api_technician(request, pk):
    if request.method == "GET": 
        try:
            technician = Technician.objects.get(id=pk)
            return JsonResponse(
                {'technician': technician},
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
           response = JsonResponse(
                {"message": "Tech does not exist"}
            )
           response.status_code = 404
           return response
    elif request.method == "DELETE":
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse(
                {"message": "Tech has been deleted"}
            )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.filter(id=pk).update(**content)
        return JsonResponse(
            {"message": "Tech has been updated"},
            encoder=TechnicianEncoder,
            safe=False
        )


# Technician List
@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all().order_by('name')
        return JsonResponse(
            {'technicians': technicians},
            encoder=TechnicianEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            technicians = Technician.objects.create(**content)
            return JsonResponse(
                {'technician': technicians},
                encoder=TechnicianEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the technician"}
            )
            response.status_code = 400
            return response


# Appointment Detail
@require_http_methods(["DELETE", "GET", "PUT"])
def api_appointment(request, pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            {'appointment': appointment},
            encoder=AppointmentEncoder,
            safe=False
        )
    elif request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"message": "Appointment has been deleted."})
    else:
        content = json.loads(request.body)
        try:
            if "technician" in content:
                technician = Technician.objects.get(id=content["technician"])
                content["technician"] = technician
            elif "vin" in content:
                vin = AutomobileVO.objects.get(vin=content["vin"])
                content["vin"] = vin
        except AutomobileVO.DoesNotExist:
                return JsonResponse(
                    {"message": "Vin Does Not Exist"},
                    status= 400,
                )
        appointment = Appointment.objects.filter(id=pk).update(**content)
        return JsonResponse(
            {"message": "Appointment has been updated."},
            encoder=AppointmentEncoder,
            safe=False
        )


# Appointment List
@require_http_methods(["GET", "POST"])
def api_appointments(request, vin_id=None):
    if request.method == "GET":
        if vin_id is None:
            appointments = Appointment.objects.all().order_by('-id')
        else:
            appointments = Appointment.objects.filter(vin=vin_id).order_by('-date_time')
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    else: # POST
        try:
            content = json.loads(request.body)
            technician = content["technician"]
            technician = Technician.objects.get(employee_number=technician)
            content["technician"] = technician
            try:
                if AutomobileVO.objects.get(vin=content["vin"]):
                    content["vip"] = True
            except:
                content["vip"] = False
                
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Appointment could not be created"}
            )
            response.status_code = 404
            return response
