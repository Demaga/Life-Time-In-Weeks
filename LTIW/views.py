from django.shortcuts import render, redirect
from .forms import UserLoginForm, UserRegisterForm, LifeForm, UserLifeForm
from django.contrib.auth import authenticate, login, logout
from django.utils import timezone
from create.models import LifeExpectancy, UserLife, Event
from create.forms import UserEventForm
from django.http import JsonResponse, HttpResponse
import json

def home(request):

	# user login
	form = UserLoginForm(request.POST or None)
	if form.is_valid():
		username = form.cleaned_data.get('username')
		password = form.cleaned_data.get('password')
		user = authenticate(username=username, password=password)
		login(request, user)
		return redirect("home")


	context = {
		'form': form,
	}
	return render(request, "LTIW/index.html", context=context)



def log_out(request):
    logout(request)
    return redirect("home")


def signup(request):
	# user login
	form = UserLoginForm(request.POST or None)
	if form.is_valid():
		username = form.cleaned_data.get('username')
		password = form.cleaned_data.get('password')
		user = authenticate(username=username, password=password)
		login(request, user)
		return redirect("home")

	regform = UserRegisterForm(request.POST or None)
	if regform.is_valid():
		user = regform.save(commit=False)
		password = regform.cleaned_data.get("password")
		user.set_password(password)
		user.save()
		new_user = authenticate(username=user.username, password=password)
		login(request, new_user)
		return redirect("home")

	context = {
		'regform': regform,
		'form': form,
	}
	return render(request, "LTIW/signup.html", context=context)



def famous(request):
	# user login
	form = UserLoginForm(request.POST or None)
	if form.is_valid():
		username = form.cleaned_data.get('username')
		password = form.cleaned_data.get('password')
		user = authenticate(username=username, password=password)
		login(request, user)
		return redirect("home")

	return render(request, 'LTIW/famous.html', {'form': form})


def articles(request):
	# user login
	form = UserLoginForm(request.POST or None)
	if form.is_valid():
		username = form.cleaned_data.get('username')
		password = form.cleaned_data.get('password')
		user = authenticate(username=username, password=password)
		login(request, user)
		return redirect("home")

	return render(request, "LTIW/articles.html", {'form': form})


def create(request, choosen="Australia"):
	life_exp = open('life-expectancy.json', 'r')
	life_exp_data = json.load(life_exp)

	life = None

	form = LifeForm(request.POST or None)
	if form.is_valid():
		country = form.get('country')
		life = LifeExpectancy.objects.get(country=country)	
	
	countries = LifeExpectancy.objects.all()

	# user login
	form = UserLoginForm(request.POST or None)
	if form.is_valid():
		username = form.cleaned_data.get('username')
		password = form.cleaned_data.get('password')
		user = authenticate(username=username, password=password)
		login(request, user)
		return redirect("home")

	context = {
		'countries': countries,
		'life': life,
		'form': form,
	}

	return render(request, "LTIW/create.html", context=context)


def contactform(request):
	# user login
	form = UserLoginForm(request.POST or None)
	if form.is_valid():
		username = form.cleaned_data.get('username')
		password = form.cleaned_data.get('password')
		user = authenticate(username=username, password=password)
		login(request, user)
		return redirect("home")

	return render(request, 'LTIW/form.html', {'form': form})



def userprofile(request):

	form = LifeForm(request.POST or None)
	if form.is_valid():
		country = form.get('country')
		life = LifeExpectancy.objects.get(country=country)	
	
	countries = LifeExpectancy.objects.all()

	# user login
	form = UserLoginForm(request.POST or None)
	if form.is_valid():
		username = form.cleaned_data.get('username')
		password = form.cleaned_data.get('password')
		user = authenticate(username=username, password=password)
		login(request, user)
		return redirect("home")


	usereventform = UserEventForm(request.POST or None)
	if usereventform.is_valid():
		b = Event(life=request.user, title=usereventform.cleaned_data.get('title'), description=usereventform.cleaned_data.get('description'), date=usereventform.cleaned_data.get('date'))
		b.save()

	lifeform = UserLifeForm(request.POST or None)
	if lifeform.is_valid():
		b = UserLife(user=request.user, birth=lifeform.cleaned_data.get('birth'), lifetime=lifeform.cleaned_data.get('lifetime'))
		b.save()
		lifeform = UserLifeForm(request.POST or None)


	context = {
		'countries': countries,
		'form': form,
		'usereventform': usereventform,
		'lifeform': lifeform,
	}

	return render(request, 'LTIW/profile.html', context=context)



def getlife(request):
    lifetime = UserLife.objects.filter(user=request.user)[0]
    return HttpResponse(lifetime.lifetime)


def getbirth(request):
    lifetime = UserLife.objects.filter(user=request.user)[0]
    return HttpResponse(lifetime.birth) 