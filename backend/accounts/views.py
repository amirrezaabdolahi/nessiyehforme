from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
import random
from utils import send_otp_code

from .models import User, OtpCode
from .serializers import (
    RegisterSerializer,
    RegisterVerifyCodeSerializer,
    LoginSerializer,
    SendOTPSerializer,
    OTPLoginSerializer
)

class RegisterView(APIView):

    def post(self, request):

        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        phone_number = serializer.validated_data["phone_number"]

        if User.objects.filter(phone_number=phone_number).exists():
            return Response(
                {   "ok": "false",
                    "error": "این شماره قبلاً ثبت شده است"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        if serializer.is_valid():
            random_code = random.randint(100000, 999999)
            # send_otp_code(phone_number, random_code)
            OtpCode.objects.create(
                phone_number=phone_number,
                code=random_code,
                full_name=serializer.validated_data["full_name"],
                password=serializer.validated_data["password"]
            )
        
            return Response({
                "ok": "true",
                "message": "کد تایید به شماره شما ارسال شد"
            })
    
class RegisterVerifyCodeView(APIView):

    def post(self, request):

        serializer = RegisterVerifyCodeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        phone_number = serializer.validated_data["phone_number"]
        code = serializer.validated_data["code"]

        try:
            otp_code = OtpCode.objects.get(
                phone_number=phone_number,
                code=code
            )
        except OtpCode.DoesNotExist:
            return Response(
                {
                    "ok": "false",
                    "error": "کد تایید اشتباه است"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        if not otp_code.is_valid():
            return Response(
                {
                    "ok": "false",
                    "error": "کد تایید منقضی شده است"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        user = User.objects.create_user(
            phone_number=phone_number,
            full_name=otp_code.full_name,
            password=otp_code.password
        )

        otp_code.delete()

        refresh = RefreshToken.for_user(user)

        return Response({
            "ok": "true",
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
                {
                    "ok": "false",
                    "error": "شماره یا رمز عبور اشتباه است"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        refresh = RefreshToken.for_user(user)

        return Response({
            "ok": "true",
            "message": "ورود موفق",
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        })
    

class SendOTPView(APIView):

    def post(self, request):
        serializer = SendOTPSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        phone_number = serializer.validated_data["phone_number"]

        if not User.objects.filter(phone_number=phone_number).exists():
            return Response(
                {
                    "ok": "false",
                    "error": "کاربر یافت نشد"
                 },
                status=status.HTTP_404_NOT_FOUND
            )

        code = random.randint(100000, 999999)

        OtpCode.objects.create(
            phone_number=phone_number,
            code=str(code)
        )

        # send_otp_code(phone_number, code)

        return Response(
            {
                "ok": "true",
                "message": "کد تایید ارسال شد"
             },
            status=status.HTTP_200_OK
        )


class OTPLoginView(APIView):

    def post(self, request):
        serializer = OTPLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        phone_number = serializer.validated_data["phone_number"]
        code = serializer.validated_data["code"]

        if not User.objects.filter(phone_number=phone_number).exists():
            return Response(
                {
                    "ok": "false",
                    "error": "کاربر یافت نشد"
                 },
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            otp_code = OtpCode.objects.get(
                phone_number=phone_number,
                code=code
            )
        except OtpCode.DoesNotExist:
            return Response(
                {
                    "ok": "false",
                    "error": "کد تایید اشتباه است"
                 },
                status=status.HTTP_400_BAD_REQUEST
            )

        if not otp_code.is_valid():
            otp_code.delete()

            return Response(
                {
                    "ok": "false",
                    "error": "کد تایید منقضی شده است"
                 },
                status=status.HTTP_400_BAD_REQUEST
            )

        user = User.objects.get(phone_number=phone_number)

        otp_code.delete()

        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "ok": "true",
                "message": "ورود موفق",
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            },
            status=status.HTTP_200_OK
        )