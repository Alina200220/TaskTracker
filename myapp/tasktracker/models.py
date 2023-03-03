from django.db import models


class ToDo(models.Model):
    id = models.BigIntegerField(primary_key=True, blank=True)
    name = models.CharField(max_length=50, blank=True)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=50, blank=True)
    date = models.DateField(blank=True)

    def __str__(self):
        return self.name
