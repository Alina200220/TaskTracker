
from django.urls import path
from .views import *

urlpatterns = [
    path('get_all/', ToDoList.as_view()),
    path('create/', ToDoCreate.as_view()),
    path('delete/<int:pk>', ToDoDetail.as_view()),
    path('update/<int:pk>', ToDoUpdate.as_view())
]
