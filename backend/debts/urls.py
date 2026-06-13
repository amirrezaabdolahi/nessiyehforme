from django.urls import path
from .views import DebtListView, DebtDetailView, DebtPayView

urlpatterns = [
    path('debts/', DebtListView.as_view()),
    path('debts/<int:pk>/', DebtDetailView.as_view()),
    path('debts/<int:pk>/pay/', DebtPayView.as_view()),
]