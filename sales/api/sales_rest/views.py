from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import CustomerEncoder, SalesPersonEncoder, SalesRecordEncoder
from .models import Customer, SalesPerson, SalesRecord

# Create your views here.
@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            customers = Customer.objects.create(**content)
            return JsonResponse(
                {"customer": customers},
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the customer"}
            )
            response.status_code=400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_customer(request, pk):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=pk)
            return JsonResponse(
                {"customer": customer},
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Customer does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=pk)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Customer does not exist"})
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.get(id=pk)
            props = "customer_name"
            for prop in props:
                if prop in content:
                    setattr(customer, prop, content[prop])
            customer.save()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Customer does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_salespersons(request):
    if request.method == "GET":
        salespersons = SalesPerson.objects.all()
        return JsonResponse(
            {"salespersons": salespersons},
            encoder=SalesPersonEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            salesperson = SalesPerson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the salesperson"}
            )
            response.status_code=400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_salesperson(request, pk):
    if request.method == "GET":
        try:
            salesperson = SalesPerson.objects.get(id=pk)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "SalesPerson does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            salesperson = SalesPerson.objects.get(id=pk)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "SalesPerson does not exist"})
    else:
        try:
            content = json.loads(request.body)
            salesperson = SalesPerson.objects.get(id=pk)
            props = "employee_number"
            for prop in props:
                if prop in content:
                    setattr(salesperson, prop, content[prop])
            salesperson.save()
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "SalesPerson does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_salesrecords(request):
    if request.method == "GET":
        salesrecords = SalesRecord.objects.all()
        return JsonResponse(
            {"salesrecords": salesrecords},
            encoder=SalesRecordEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            salesrecord = SalesRecord.objects.create(**content)
            return JsonResponse(
                salesrecord,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the salesrecord"}
            )
            response.status_code=400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_salesrecord(request, pk):
    if request.method == "GET":
        try:
            salesrecord = SalesRecord.objects.get(id=pk)
            return JsonResponse(
                salesrecord,
                encoder=SalesRecordEncoder,
                safe=False
            )
        except SalesRecord.DoesNotExist:
            response = JsonResponse({"message": "Salesrecord does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            salesrecord = SalesRecord.objects.get(id=pk)
            salesrecord.delete()
            return JsonResponse(
                salesrecord,
                encoder=SalesRecordEncoder,
                safe=False
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse({"message": "Salesrecord does not exist"})
    else:
        try:
            content = json.loads(request.body)
            salesrecord = SalesRecord.objects.get(id=pk)
            props = ["salesperson_name", "customer_name", "automobile", "price"]
            for prop in props:
                if prop in content:
                    setattr(salesrecord, prop, content[prop])
            salesrecord.save()
            return JsonResponse(
                salesrecord,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            response = JsonResponse({"message": "Salesrecord does not exist"})
            response.status_code = 404
            return response
