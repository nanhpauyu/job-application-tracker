from django.shortcuts import render,HttpResponse

# Create your views here.
def home(response):
    return HttpResponse('Hello')