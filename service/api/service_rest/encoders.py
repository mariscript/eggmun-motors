from.models import AutomobileVO, Technician, Appointment
from common.json import ModelEncoder

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href",
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
    properties =  [
        "id",
        "customer_name",
        "vin",
        "date_time",
        "reason",
        "technician",
        "completed",
        "vip",
    ]

    encoders = {
        "technician": TechnicianEncoder(),
    }
