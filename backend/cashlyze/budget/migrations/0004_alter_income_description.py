# Generated by Django 3.2.25 on 2024-12-05 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('budget', '0003_auto_20241205_1634'),
    ]

    operations = [
        migrations.AlterField(
            model_name='income',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
