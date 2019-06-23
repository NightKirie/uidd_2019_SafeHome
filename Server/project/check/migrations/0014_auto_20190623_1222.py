# Generated by Django 2.2 on 2019-06-23 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('check', '0013_casefiles_sn'),
    ]

    operations = [
        migrations.AddField(
            model_name='casefiles',
            name='address',
            field=models.CharField(default='undefined', max_length=100),
        ),
        migrations.AddField(
            model_name='casefiles',
            name='buildingDesignYear',
            field=models.CharField(default='undefined', max_length=5),
        ),
        migrations.AddField(
            model_name='casefiles',
            name='buildingFloors',
            field=models.CharField(default='1', max_length=3),
        ),
        migrations.AddField(
            model_name='casefiles',
            name='buildingHouseholdCount',
            field=models.CharField(default='undefined', max_length=4),
        ),
        migrations.AddField(
            model_name='casefiles',
            name='buildingStructure',
            field=models.CharField(default='undefined', max_length=20),
        ),
        migrations.AddField(
            model_name='casefiles',
            name='checkDate',
            field=models.CharField(default='undefined', max_length=60),
        ),
        migrations.AddField(
            model_name='casefiles',
            name='phone',
            field=models.CharField(default='undefined', max_length=10),
        ),
        migrations.AddField(
            model_name='casefiles',
            name='volunteer',
            field=models.CharField(default='undefined', max_length=20),
        ),
    ]
