from django.urls import path
from .views import api_customer, api_customers, api_salesperson, api_salespersons, api_salesrecord, api_salesrecords

urlpatterns = [
    path('customers/', api_customers, name='api_customers'),
    path('customers/<int:pk>', api_customer, name='api_customer'),
    path('salespersons/', api_salespersons, name='api_salespersons'),
    path('salespersons/<int:pk>', api_salesperson, name='api_salesperson'),
    path('salesrecords/', api_salesrecords, name='api_salesrecords'),
    path('salesrecords/<int:pk>', api_salesrecord, name='api_salesrecord'),
]
