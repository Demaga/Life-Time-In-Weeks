from django import forms
from django.forms import ModelForm
from django.contrib.auth import authenticate, get_user_model
from create.models import LifeExpectancy, UserLife

YEARS= [x for x in range(1940,2021)]

CHOICES = (
	(81.80, 'Австралия'),
	(81.70, 'Канада'),
	(69.90, "Украина")
	)

User = get_user_model()

# login/registration forms

class UserLoginForm(forms.Form):
	username = forms.CharField(label='Логин')
	password = forms.CharField(widget=forms.PasswordInput, label="Пароль")

	def clean(self, *args, **kwargs):
		username = self.cleaned_data.get('username')
		password = self.cleaned_data.get('password')

		if username and password:
			user = authenticate(username=username, password=password)
			if not user:
				raise forms.ValidationError("Пользователь не найден!")
			if not user.check_password(password):
				raise forms.ValidationError('Пароль неверный!')
			if not user.is_active:
				raise forms.ValidationError("Пользователь деактивирован.")

		return super(UserLoginForm, self).clean(*args,**kwargs)


class UserRegisterForm(forms.ModelForm):	
	username = forms.CharField(label='Логин')
	email = forms.EmailField(label="Email")
	password = forms.CharField(widget=forms.PasswordInput, label='Пароль')

	class Meta:
		model = User
		fields = [
			'username',
			'email',
			'password'
		]
		help_texts = {
            'password': None,
            'username': None,
        }

	def clean_email(self):
		email = self.cleaned_data.get('email')

		email_qs = User.objects.filter(email=email)

		if email_qs.exists():
			raise forms.ValidationError("Такой пользователь уже существует")

		return email


class LifeForm(ModelForm):
	class Meta:
		model = LifeExpectancy
		fields = ['country']


class UserLifeForm(ModelForm):
	birth = forms.DateField(label='Дата рождения', widget=forms.SelectDateWidget(years=YEARS))
	lifetime = forms.ChoiceField(choices=CHOICES, label='Страна проживания')
	class Meta:
		model = UserLife
		fields = ['birth', 'lifetime']

	def __getattribute__(self, item):
		return super().__getattribute__(item)

