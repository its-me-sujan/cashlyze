# Generated by Django 3.2.25 on 2024-12-23 06:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('budget', '0006_auto_20241205_1659'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='account_type',
        ),
        migrations.AddField(
            model_name='account',
            name='name',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
