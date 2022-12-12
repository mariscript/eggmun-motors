# Generated by Django 4.0.3 on 2022-12-09 22:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0010_alter_salesrecord_employee_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesrecord',
            name='employee_number',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='employee_numbers', to='sales_rest.salesperson'),
        ),
    ]
