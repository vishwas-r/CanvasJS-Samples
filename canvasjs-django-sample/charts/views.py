from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

def index(request):
    data_points = [
        {"x": 10, "y": 21},
        {"x": 20, "y": 25},
        {"x": 30, "y": 20},
        {"x": 40, "y": 35},
        {"x": 50, "y": 38},
        {"x": 60, "y": 45},
        {"x": 70, "y": 50},
        {"x": 80, "y": 55},
        {"x": 90, "y": 60},
        {"x": 100, "y": 58}
    ]
    return render(request, 'index.html', { "data_points" : data_points })