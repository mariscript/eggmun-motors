# Generated by Django 4.0.3 on 2022-12-08 15:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='salesrecord',
            name='customer_number',
        ),
        migrations.RemoveField(
            model_name='salesrecord',
            name='employee_number',
        ),
        migrations.AddField(
            model_name='salesrecord',
            name='customer_name',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='record_customer_name', to='sales_rest.customer'),
        ),
        migrations.AddField(
            model_name='salesrecord',
            name='salesperson_name',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='record_salesperson_name', to='sales_rest.salesperson'),
        ),
    ]
