from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserCreationForm

import json
# Create your views here.


def register(request):
    if request.method == 'POST':
#        form = UserCreationForm(request.POST)
        form = CustomUserCreationForm(request.POST)
        print("Errors", form.errors)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect("/accounts/login")
        else:
            return HttpResponse(json.dumps({'statusCode': 'failed'}),
                                content_type="application/json")
    else:
#        form = UserCreationForm()
        form = CustomUserCreationForm()
        return render(request, "registration/register.html", {'form': form})
