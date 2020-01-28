from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import LifeExpectancy, UserLife, PublicLife, Event

# Register your models here.
admin.site.register(LifeExpectancy)
admin.site.register(PublicLife)
admin.site.register(Event)

class LifeInline(admin.StackedInline):
    model = UserLife
    can_delete = False

# Define a new User admin
class UserAdmin(BaseUserAdmin):
    inlines = (LifeInline,)

# Re-register UserAdmin
admin.site.unregister(User)
admin.site.register(User, UserAdmin)