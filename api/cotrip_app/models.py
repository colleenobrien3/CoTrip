from django.db import models

class Location(models.Model):
    city = models.CharField(max_length=80)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)


    def __str__(self):
        return self.city + ", " + self.state
    