from common.json import ModelEncoder
from .models import AutomobileVO, Customer, SalesPerson, SalesRecord, SalesHistory
import json

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
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
        "customer_name",
        "salesperson_name",
        "automobile",
    ]


    def get_extra_data(self, o):
        customer_name = json.dumps(o.customer_name, default=str)
        customer_name = json.loads(customer_name)
        salesperson_name = json.dumps(o.salesperson_name, default=str)
        salesperson_name = json.loads(salesperson_name)
        automobile = json.dumps(o.automobile, default=str)
        automobile = json.loads(automobile)
        return {
        "customer_name": customer_name,
        "salesperson_name": salesperson_name,
        "automobile": automobile
        }

        # return {
        #     "customer_name": json.dumps(o.customer_name, default=str),
        #     "salesperson_name": json.dumps(o.salesperson_name, default=str),
        #     "automobile": json.dumps(o.automobile, default=str),
        # }

class SalesHistoryEncoder(ModelEncoder):
    model = SalesHistory
    properties = [
        "id",
        "employee_number",
        "salesperson_name",
        "customer_name",
        "automobile",
        "price",
    ]

    def get_extra_data(self, o):
        salesperson_name = json.dumps(o.salesperson_name, default=str)
        salesperson_name = json.loads(salesperson_name)
        customer_name = json.dumps(o.customer_name, default=str)
        customer_name = json.loads(customer_name)
        automobile = json.dumps(o.automobile, default=str)
        automobile = json.loads(automobile)
        price = json.dumps(price, default=str)
        price = json.loads(price)
        return {
            "salesperson_name": salesperson_name,
            "customer_name": customer_name,
            "automobile": automobile,
            "price": price,
        }
