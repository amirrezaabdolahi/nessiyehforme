from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User
from .forms import UserCreationForm, UserChangeForm
from django.contrib.auth.models import Group

class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ('phone_number', 'email', 'full_name', 'is_shop', 'is_admin')
    list_filter = ('is_admin',)
    fieldsets = (
        (None, {'fields': ('phone_number', 'email', 'full_name', 'password')}),
        ('Permissions', {'fields': ('is_admin', 'is_shop')}),
        ('Shop Info', {'fields': ('shop_name', 'shop_address')}),
    )
    add_fieldsets = (
        (None, {
            'fields': ('phone_number', 'email', 'full_name', 'password1', 'password2'),
        }),
    )
    search_fields = ('phone_number',)
    ordering = ('phone_number',)
    filter_horizontal = ()

admin.site.unregister(Group)
admin.site.register(User, UserAdmin)