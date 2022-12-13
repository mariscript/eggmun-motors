# CarCar

Team:

- Brian - Sales
- Marison - Service

## Design

Inventory, Sales, Service

## Inventory

The inventory service acts as the parent for the automobile model. The sales and service microservices access data from the automobile model through a local virtual object. The inventory service also hosts the manufacturer and vehicle model data, which can be accessed globally through a linear foreign key route. The manufacturer is accessible through the vehicle model, and the vehicle model is accessible through the automobile. The automobile data is then polled by the service and sales microservices.

## Service microservice

API Service has 3 models:
AutomobileVO, Technician, Appointment.

The initial design for the project included a foreign key in the Appointment model for the Automobile value object. This was later changed to a polling function that pulls data from the Automobile entity in the Inventory microservice. When an Appointment is created, the POST function checks if the Appointment's vin number matches one from the AutomobileVO. If it does, the VIP attribute of the Appointment is set to true. The React list page uses this attribute to show which appointments have VIP customers. The service history page filters appointments by their vin number. The DELETE and PUT methods are used to cancel and change the status of appointments.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
