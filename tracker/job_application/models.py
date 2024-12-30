from django.db import models
# from .models import CompanyDetail, Recuriter, Status

# Create your models here.


class Application(models.Model):
    job_title = models.CharField(max_length=200, blank=True, null=True)
    job_description = models.TextField(blank=True, null=True)
    job_location = models.CharField(max_length=200, blank=True, null=True)
    compensation = models.CharField(max_length=200, blank=True, null=True)
    remote = models.CharField(
        max_length=1, blank=True, null=True)
    company = models.ForeignKey(
        'CompanyDetail', models.SET_NULL, null=True, blank=True
    )
    recuriter = models.ForeignKey(
        'Recuriter', models.SET_NULL, null=True, blank=True
    )
    status = models.ForeignKey(
        'Status', models.SET_NULL, null=True, blank=True
    )
    is_complete = models.BooleanField(default=False,)
    offer_accept = models.BooleanField(default=False)
    start_date = models.DateField(auto_now_add=True)
    updated_date = models.DateField(auto_now=True)
    platform = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return 'Application'


class CompanyDetail(models.Model):
    name = models.CharField(max_length=200)
    website_link = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return 'Company'


class Recuriter(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    phone = models.CharField(max_length=200, blank=True, null=True)
    email = models.EmailField(max_length=254, blank=True, null=True)
    linkedin = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return 'Recuriter'


class Status(models.Model):
    status = models.CharField(max_length=200)

    def __str__(self):
        return 'Status'
