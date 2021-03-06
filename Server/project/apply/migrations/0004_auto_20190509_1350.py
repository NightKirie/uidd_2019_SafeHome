# Generated by Django 2.2 on 2019-05-09 05:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apply', '0003_auto_20190509_1347'),
    ]

    operations = [
        migrations.AlterField(
            model_name='case',
            name='addressAlley',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='case',
            name='addressCounty',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='case',
            name='addressDistrict',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='case',
            name='addressFloor',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='case',
            name='addressLane',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='case',
            name='addressNumber',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='case',
            name='addressRoad',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='case',
            name='addressRoom',
            field=models.CharField(max_length=5, null=True),
        ),
    ]
