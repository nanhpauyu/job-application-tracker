from django.urls import path
from .views import home, login, logout, add_post

urlpatterns = [
    path('', home, name='student_home'),
    path('login/', login, name='login'),
    path('logout/', logout, name='logout'),
    path('add_post', add_post, name='add_post'),
]
