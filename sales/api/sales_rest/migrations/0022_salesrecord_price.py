# Generated by Django 4.0.3 on 2022-12-12 23:18

from decimal import Decimal
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0021_remove_salesrecord_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='salesrecord',
            name='price',
            field=models.DecimalField(decimal_places=2, default=Decimal('20000.00'), max_digits=8),
        ),
    ]