from django.urls import path

from .views import WorldClocks, addContry
app_name = 'clock'
urlpatterns = [
    path('', WorldClocks.as_view(), name='index'),
    path('add-country/', addContry, name='add_country')
]
