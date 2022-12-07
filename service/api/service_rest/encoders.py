from.models import AutomobileVO, Technician, Appointment
from common.json import ModelEncoder

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "import_href",
        "color",
        "year",
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
        "date_time",
        "reason",
        "vip",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }