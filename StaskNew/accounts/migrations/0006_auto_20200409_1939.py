# Generated by Django 3.0.5 on 2020-04-09 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20200409_1914'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='first_name',
            field=models.CharField(max_length=50, verbose_name='Имя пользователя'),
        ),
        migrations.AlterField(
            model_name='account',
            name='last_name',
            field=models.CharField(max_length=50, verbose_name='Фамилия пользователя'),
        ),
        migrations.AlterField(
            model_name='account',
            name='patronymic',
            field=models.CharField(max_length=50, verbose_name='Отчество пользователя'),
        ),
    ]
