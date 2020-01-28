from django import forms
from django.forms import ModelForm
from .models import PublicLife, UserLife, Event

YEARS= [x for x in range(1940,2021)]

CHOICES = (
	(81.80, 'Австралия'),
	(81.70, 'Канада'),
	(69.90, "Украина")
	)

class PublicLifeForm(ModelForm):
	birth = forms.DateField(label='Дата рождения', widget=forms.SelectDateWidget(years=YEARS))
	lifetime = forms.ChoiceField(choices=CHOICES, label='Страна проживания')
	class Meta:
		model = PublicLife
		fields = ['birth', 'lifetime']

	def __getattribute__(self, item):
		return super().__getattribute__(item)


class UserEventForm(ModelForm):
    title = forms.CharField(max_length=200, label='Событие')
    description = forms.CharField(max_length=300, label='Описание')
    date = forms.DateField(label='Дата', widget=forms.SelectDateWidget(years=YEARS))


    class Meta:
        model = Event
        fields = ['title', 'description', 'date']
