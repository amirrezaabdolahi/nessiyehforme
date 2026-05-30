from django.contrib.auth import authenticate

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken

from .models import User
from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    SendOTPSerializer,
    OTPLoginSerializer
)


class SendOTPView(APIView):

    def post(self, request):

        serializer = SendOTPSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        phone_number = serializer.validated_data["phone_number"]

        if not User.objects.filter(phone_number=phone_number).exists():
            return Response(
                {"error": "کاربر یافت نشد"},
                status=status.HTTP_404_NOT_FOUND
            )

        return Response({
            "message": "OTP ارسال شد",
            "otp": "111111"
        })


class RegisterView(APIView):

    def post(self, request):

        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        phone_number = serializer.validated_data["phone_number"]

        if User.objects.filter(phone_number=phone_number).exists():
            return Response(
                {"error": "این شماره قبلاً ثبت شده است"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if User.objects.filter(email=serializer.validated_data.get("email")).exists():
            return Response(
                {"error": "این ایمیل قبلاً ثبت شده است"},
                status=status.HTTP_400_BAD_REQUEST
            )
        

        user = User.objects.create_user(
            email=serializer.validated_data.get("email"),
            phone_number=phone_number,
            full_name=serializer.validated_data["full_name"],
            password=serializer.validated_data["password"]
        )

        refresh = RefreshToken.for_user(user)

        return Response({
            "message": "ثبت نام موفق",
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        })


class LoginView(APIView):

    def post(self, request):

        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        phone_number = serializer.validated_data["phone_number"]
        password = serializer.validated_data["password"]

        user = authenticate(
            request,
            phone_number=phone_number,
            password=password
        )

        if user is None:
            return Response(
                {"error": "شماره یا رمز عبور اشتباه است"},
                status=status.HTTP_400_BAD_REQUEST
            )

        refresh = RefreshToken.for_user(user)

        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        })
    


class OTPLoginView(APIView):

    def post(self, request):

        serializer = OTPLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        phone_number = serializer.validated_data["phone_number"]
        code = serializer.validated_data["code"]

        if code != "111111":
            return Response(
                {"error": "کد تایید اشتباه است"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            user = User.objects.get(
                phone_number=phone_number
            )
        except User.DoesNotExist:
            return Response(
                {"error": "کاربر پیدا نشد"},
                status=status.HTTP_404_NOT_FOUND
            )

        refresh = RefreshToken.for_user(user)

        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        })