# Generated by Django 3.0.8 on 2020-11-25 18:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('schools', '0002_auto_20201125_1619'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='school',
            name='primary_color',
        ),
        migrations.RemoveField(
            model_name='school',
            name='secondary_color',
        ),
    ]
