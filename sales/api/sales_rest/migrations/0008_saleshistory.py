# Generated by Django 4.0.3 on 2022-12-09 17:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0007_automobilevo_import_href'),
    ]

    operations = [
        migrations.CreateModel(
            name='SalesHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('automobile', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='vins', to='sales_rest.salesrecord')),
                ('customer_name', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='customer_names', to='sales_rest.salesrecord')),
                ('employee_number', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='employee_numbers', to='sales_rest.salesperson')),
                ('price', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='prices', to='sales_rest.salesrecord')),
                ('salesperson_name', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='salesperson_names', to='sales_rest.salesrecord')),
            ],
        ),
    ]