from django.urls import path
from .views import api_customer, api_customers, api_salesperson, api_salespersons, api_salesrecord, api_salesrecords

urlpatterns = [
    path('customers/', api_customers, name='api_customers'),
    path('customer/<int:pk>', api_customer, name='api_customer'),
    path('salespersons/', api_salespersons, name='api_salespersons'),
    path('salesperson/<int:pk>', api_salesperson, name='api_salesperson'),
    path('salesrecords/', api_salesrecords, name='api_salesrecords'),
    path('salesrecord/<int:pk>', api_salesrecord, name='api_salesrecord'),
    path('saleshistory/', api_salesrecords, name='api_saleshistory')
]
