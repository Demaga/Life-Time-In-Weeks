from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse


# Create your models here.
class LifeExpectancy(models.Model):
    country = models.CharField(max_length=100)
    life_exp_value = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.country



class UserLife(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    lifetime = models.DecimalField(max_digits=5, decimal_places=2, default=100)
    birth = models.DateField()


class PublicLife(models.Model):
    name = models.CharField(max_length=200, unique=True)
    lifetime = models.DecimalField(max_digits=5, decimal_places=2, default=100)
    birth = models.DateField()


class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=300)
    date = models.DateField()
    life = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
