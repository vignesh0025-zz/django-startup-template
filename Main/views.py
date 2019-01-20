from django.http import HttpResponse, HttpRequest
from django.shortcuts import render_to_response

def index(request: HttpRequest):
    return render_to_response('Main/index.html')
