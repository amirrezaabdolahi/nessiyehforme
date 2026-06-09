from django.urls import path
from .views import CustomerListCreateView, CustomerDeleteView

urlpatterns = [
    path('customers/', CustomerListCreateView.as_view()),
    path('customers/<int:pk>/', CustomerDeleteView.as_view()),
]