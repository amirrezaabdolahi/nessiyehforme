from django.urls import path

from .views import (
    RegisterView,
    RegisterVerifyCodeView,
    LoginView,
    SendOTPView,
    OTPLoginView,
)

urlpatterns = [
    path("register/", RegisterView.as_view()),
    path("verify_register/", RegisterVerifyCodeView.as_view()),
    path("login/", LoginView.as_view()),
    path("send_otp/", SendOTPView.as_view()),
    path("login_otp/", OTPLoginView.as_view()),
]