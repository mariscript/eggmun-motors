from common.json import ModelEncoder
from .models import AutomobileVO, Customer, SalesPerson, SalesRecord

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "color",
        "year",
        "vin"
        "model",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "customer_name",
        "customer_number",
        "address",
        "phone_number",
    ]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "sales_person_name",
        "employee_number",
    ]



class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "id",
        "price",
        "sales_record_number",
        "customer_number",
        "employee_number",
        "vin",
    ]

    encoders = {
        "customer_number": CustomerEncoder,
        "employee_number": SalesPersonEncoder,
        "vin": AutomobileVO,
    }
