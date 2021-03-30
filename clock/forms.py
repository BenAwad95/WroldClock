from django.forms import ModelForm, fields
from .models import Country

class CountryForm(ModelForm):
    class Meta:
        model = Country
        # fields = ('__all__')
        exclude = ['offset_string']
        
