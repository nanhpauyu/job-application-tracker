from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate
from .custom_decorators import login_required
from rest_framework.decorators import api_view
from rest_framework.response import Response
from job_application.models import Application, CompanyDetail


def home(request):
    return render(request=request, template_name='student_home.html')


def login(request):
    if 'user' in request.session:
        return redirect('student_home')
    else:
        if request.method == 'GET':
            return render(request, 'login.html', )
        else:
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(username=username, password=password)
            if user is None:
                content = {'error': True}
                return render(request, 'login.html', content)
            else:
                request.session['user'] = user.username
                return redirect('add_post')


def logout(request):
    try:
        del request.session["user"]
    except KeyError:
        pass
    return redirect('student_home')


# @login_required
@api_view(['POST'])
def add_post(request):
    try:
        job_title = request.data['jobTitle'].strip()
        job_location = request.data['jobLocation'].strip()
        compensation = request.data['compensation'].strip()
        remote = request.data['remote'].strip()
        company_link = request.data['companyLink'].strip()
        company_name = request.data['companyName'].strip()
        platform = request.data['platform'].strip()
        job_description = request.data['jd'].strip()
        company = CompanyDetail(
            name=company_name,
            website_link=company_link,
        )
        company.save()
        application = Application(
            job_title=job_title,
            job_description=job_description,
            job_location=job_location,
            compensation=compensation,
            remote=remote,
            company=company,
            platform=platform,
        )
        application.save()
    except:
        return Response('ERROR')

    return Response('PASS')
