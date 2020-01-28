from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import JsonResponse, HttpResponse
from .models import LifeExpectancy, Event
from .forms import PublicLifeForm, UserEventForm
from django.views.generic import ListView, DetailView, CreateView, UpdateView


# Create your views here.
def CountriesData(request):
	data = dict()

	countries = LifeExpectancy.objects.all()
	for country in countries:
		data[country.country] = country.life_exp_value
		
	return JsonResponse(data)


def EventsApi(request):
	data = dict()

	objects = Event.objects.filter(life=request.user)
	
	print(data)

	i = 0
	for obj in objects:
		data[i] = dict()
		data[i]['title'] = obj.title
		data[i]['description'] = obj.description
		data[i]['date'] = obj.date
		i = i + 1

	return JsonResponse(data)



class EventListView(ListView):
	model = Event
	template_name = 'LTIW/profile.html'
	context_object_name = 'events'


class EventDetailView(DetailView):
	model = Event
	template_name = 'LTIW/event_detail.html'


class EventCreateView(CreateView):
	model = Event
	form_class = UserEventForm
	success_url = 'LTIW/profile.html'
	template_name = 'LTIW/event_form.html'

	def form_valid(self, form):
		form.instance.life = self.request.user
		return super().form_valid(form)


class EventUpdateView(UpdateView):
	model = Event
	form_class = UserEventForm
	success_url = 'profile'
	template_name = 'LTIW/event_form.html'

	def form_valid(self, form):
		form.instance.life = self.request.user
		return super().form_valid(form)

