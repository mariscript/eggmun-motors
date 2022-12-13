from common.json import ModelEncoder
from .models import AutomobileVO, Customer, SalesPerson, SalesRecord
import json

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "customer_name",
        "address",
        "phone_number",
    ]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "salesperson_name",
        "employee_number",
    ]


class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "id",
        "price",
        "customer",
        "salesperson",
        "automobile",
    ]

    encoders = {
        "customer": CustomerEncoder(),
        "salesperson": SalesPersonEncoder(),
        "automobile": AutomobileVOEncoder(),
    }


    def get_extra_data(self, o):
        customer = json.dumps(o.customer, default=str)
        customer = json.loads(customer)
        salesperson = json.dumps(o.salesperson, default=str)
        salesperson = json.loads(salesperson)
        automobile = json.dumps(o.automobile, default=str)
        automobile = json.loads(automobile)
        return {
        "customer": customer,
        "salesperson": salesperson,
        "automobile": automobile
        }
