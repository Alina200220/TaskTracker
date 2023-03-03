from django.shortcuts import render
from .serializers import ToDoSerializers
from .models import ToDo
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


class ToDoList(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ToDoSerializers
    queryset = ToDo.objects.all()


class ToDoCreate(generics.CreateAPIView):
    serializer_class = ToDoSerializers


class ToDoDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ToDoSerializers
    queryset = ToDo.objects.all()


