# Generated by Django 4.1.7 on 2023-03-02 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ToDo',
            fields=[
                ('id', models.BigIntegerField(blank=True, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=50)),
                ('description', models.TextField(blank=True)),
                ('status', models.CharField(blank=True, max_length=50)),
                ('date', models.DateField(blank=True)),
            ],
        ),
    ]
