# Generated by Django 2.2 on 2019-05-14 02:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apply', '0014_auto_20190514_1054'),
    ]

    operations = [
        migrations.AlterField(
            model_name='case',
            name='TWID',
            field=models.CharField(max_length=10),
        ),
    ]
