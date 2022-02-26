from turtle import title
from django.db import models

# Create your models here.


class Reading(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self) -> str:
        return self.title
