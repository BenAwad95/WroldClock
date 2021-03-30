from django.views.generic import ListView
from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import CountryForm
from .models import Country

# def index(request):
#     context = {'page_title':'World clock'}
#     return render(request, 'clock/index.html', context)

class WorldClocks(ListView):
    model = Country
    context_object_name = 'clocks'
    # template_name = 'index.html'


def addContry(request):
    form = CountryForm(request.POST or None)
    if form.is_valid():
        # print(form.cleaned_data)
        country = form.save(commit=False)
        # print(dir(country))
        country.offset_string = f'+{str(country.offset).zfill(2)}:00'
        country.save()
        return redirect(reverse('clock:index'))
    return render(request, 'clock/add_country.html', context={'form': form})
        
    