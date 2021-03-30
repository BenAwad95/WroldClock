from django.db import models

class Country(models.Model):
    name = models.CharField(verbose_name='Country', max_length=50)
    offset = models.SmallIntegerField(verbose_name='offset time zone')
    offset_string = models.CharField(verbose_name='offset string', max_length=7, default='+00:00')
