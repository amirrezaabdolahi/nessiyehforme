from django import forms
from .models import User
from django.contrib.auth.forms import ReadOnlyPasswordHashField

class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirm Password', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['phone_number', 'full_name', 'is_shop', 'shop_name', 'shop_address']

    def clean_password2(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')

        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords dont match")
        
        return password2
    
    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user
    

class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField(help_text="You can change the password using <a href=\"../password/\">this form</a>.")
    class Meta:
        model = User
        fields = ['phone_number', 'full_name', 'password', 'is_active', 'is_admin', 'is_shop', 'shop_name', 'shop_address']

    def clean_password(self):
        return self.initial['password']
    

    