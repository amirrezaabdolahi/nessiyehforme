from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
import random
from utils import send_otp_code

from .models import User, OtpCode
from .serializers import (
    RegisterSerializer,
    RegisterVerifyCodeSerializer,
    LoginSerializer,
    SendOTPSerializer,
    OTPLoginSerializer,
    ProfileSerializer
)

class RegisterView(APIView):

    def post(self, request):

        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        phone_number = serializer.validated_data["phone_number"]

        if User.objects.filter(phone_number=phone_number).exists():
            return Response(
                {   "ok": False,
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
                password=serializer.validated_data["password"],
                is_shop=serializer.validated_data["is_shop"],
                shop_name=serializer.validated_data["shop_name"],
                shop_address=serializer.validated_data["shop_address"]
            )
        
            return Response({
                "ok": True,
                "message": "کد تایید به شماره شما ارسال شد"
            })
    
class RegisterVerifyCodeView(APIView):

    def post(self, request):

        serializer = RegisterVerifyCodeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        phone_number = serializer.validated_data["phone_number"]
        code = serializer.validated_data["code"]

        try:
            otp_code = OtpCode.objects.filter(
                phone_number=phone_number,
                code=code
            ).order_by("-created_at").first()
        except OtpCode.DoesNotExist:
            return Response(
                {
                    "ok": False,
                    "error": "کد تایید اشتباه است"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        if not otp_code.is_valid():
            return Response(
                {
                    "ok": False,
                    "error": "کد تایید منقضی شده است"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        user = User.objects.create_user(
            phone_number=phone_number,
            full_name=otp_code.full_name,
            password=otp_code.password,
            is_shop=otp_code.is_shop,
            shop_name=otp_code.shop_name,
            shop_address=otp_code.shop_address
        )

        otp_code.delete()

        refresh = RefreshToken.for_user(user)

        return Response({
            "ok": True,
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
                    "ok": False,
                    "error": "شماره یا رمز عبور اشتباه است"
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        refresh = RefreshToken.for_user(user)

        return Response({
            "ok": True,
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
                    "ok": False,
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
                "ok": True,
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
                    "ok": False,
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
                    "ok": False,
                    "error": "کد تایید اشتباه است"
                 },
                status=status.HTTP_400_BAD_REQUEST
            )

        if not otp_code.is_valid():
            otp_code.delete()

            return Response(
                {
                    "ok": False,
                    "error": "کد تایید منقضی شده است"
                 },
                status=status.HTTP_400_BAD_REQUEST
            )

        user = User.objects.get(phone_number=phone_number)

        otp_code.delete()

        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "ok": True,
                "message": "ورود موفق",
                "refresh": str(refresh),
                "access": str(refresh.access_token)
            },
            status=status.HTTP_200_OK
        )
    


class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
            "ok": True,
            "phone_number": user.phone_number,
            "full_name": user.full_name,
            "is_shop": user.is_shop,
            "shop_name": user.shop_name,
            "shop_address": user.shop_address
        })