"""LTIW URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from LTIW.views import (
	home,
    log_out,
    signup,
    articles,
    famous,
    create,
    contactform,
    userprofile,
    getlife,
    getbirth,
	)
from create.views import (
    EventListView,
    EventDetailView,
    EventCreateView,
    EventUpdateView,
    CountriesData,
    EventsApi,
    )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name="home"),
    path('logout/', log_out, name='logout'),
    path('signup/', signup, name='signup'),
    path('articles/', articles, name="articles"),
    path('create/', create, name="create"),
    path('famous', famous, name='famous'),
    path('countriesdata/', CountriesData),
    path('form/', contactform, name='contactform'),
    path('profile/', EventListView.as_view(), name='profile'),
    path('profile/event/create/', EventCreateView.as_view(), name='event-create'),
    path('profile/event/<int:pk>/', EventDetailView.as_view(), name='event-detail'),
    path('profile/event/<int:pk>/update/', EventUpdateView.as_view(), name='event-update'),
    path('api/getlife/', getlife, name='getlife'),
    path('api/getbirth/', getbirth, name='getbirth'),
    path('api/getevents', EventsApi, name='eventsapi'),
]
