# Generated by Django 4.0.3 on 2022-12-07 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='vin',
            field=models.CharField(max_length=17, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='automobilevo',
            name='vin',
            field=models.CharField(max_length=17, null=True, unique=True),
        ),
    ]
