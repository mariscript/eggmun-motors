from.models import AutomobileVO, Technician, Appointment
from common.json import ModelEncoder

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
    ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "customer_name",
        "vin",
        "date_time",
        "reason",
        "vip",
        "technician",
        "status",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }
