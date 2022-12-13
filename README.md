# CarCar

Team:

* Brian - Sales
* Marison - Service

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

We used an automobile VO to integrate with the inventory microservice. I created models for customer, sales person, and sales record and added the automobile href to my sales poller. The sales record model read from the customer, sales person, and automobile models via foreign key.
