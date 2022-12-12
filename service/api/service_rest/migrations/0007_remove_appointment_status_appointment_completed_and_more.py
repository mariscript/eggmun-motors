# Generated by Django 4.0.3 on 2022-12-09 19:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0006_remove_automobilevo_import_href'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='status',
        ),
        migrations.AddField(
            model_name='appointment',
            name='completed',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='customer_name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='technician',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='+', to='service_rest.technician'),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='vip',
            field=models.BooleanField(),
        ),
    ]