from django.shortcuts import render
from .models import Location

# Create your views here.
def location_list(request):
    locations = Location.objects.all()
    return render(request, 'cotrip/locations/html', {'locations': location})