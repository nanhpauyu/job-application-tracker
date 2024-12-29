from django.db import models
# from .models import CompanyDetail, Recuriter, Status

# Create your models here.


class Application(models.Model):
    position = models.CharField(max_length=200)
    job_description = models.TextField()
    location = models.CharField(max_length=200)
    min_compensation = models.IntegerField()
    max_compensation = models.IntegerField()
    REMOTE_CHOICES = [
        ('O', 'Onsite'),
        ('R', 'Remote'),
        ('H', 'Hybrid'),
    ]
    remote = models.CharField(
        max_length=1, choices=REMOTE_CHOICES)
    company = models.ForeignKey(
        'CompanyDetail', models.SET_NULL, null=True, blank=True
    )
    recuriter = models.ForeignKey(
        'Recuriter', models.SET_NULL, null=True, blank=True
    )
    status = models.ForeignKey(
        'Status', models.SET_NULL, null=True, blank=True
    )
    is_complete = models.BooleanField(default=False)
    offer_accept = models.BooleanField(default=False)
    start_date = models.DateField(auto_now_add=True)
    updated_date = models.DateField(auto_now=True)
    platform = models.CharField(max_length=200)

    def __str__(self):
        return 'Application'


class CompanyDetail(models.Model):
    name = models.CharField(max_length=200)
    website_link = models.CharField(max_length=200)
    linkedin = models.CharField(max_length=200)

    def __str__(self):
        return 'Company'


class Recuriter(models.Model):
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    email = models.EmailField(max_length=254)
    linkedin = models.CharField(max_length=200)

    def __str__(self):
        return 'Recuriter'


class Status(models.Model):
    status = models.CharField(max_length=200)

    def __str__(self):
        return 'Status'
