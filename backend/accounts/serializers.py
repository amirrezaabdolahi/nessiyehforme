from rest_framework import serializers
from .models import User, OtpCode
import re

def validate_phone_number(value):
    if not re.fullmatch(r'09\d{9}', value):
        raise serializers.ValidationError(
            "شماره تلفن باید با 09 شروع شده و 11 رقم باشد."
        )
    return value

class RegisterSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=11, validators=[validate_phone_number])
    full_name = serializers.CharField(max_length=255)
    password = serializers.CharField(write_only=True)
    is_shop = serializers.BooleanField(default=False)
    shop_name = serializers.CharField(max_length=255, required=False, allow_blank=True)
    shop_address = serializers.CharField(max_length=255, required=False, allow_blank=True)

    def validate(self, data):
        errors = {}
    
        if data.get("is_shop"):
            if not data.get("shop_name"):
                errors["ok"] = False
                errors["shop_name"] = "نام فروشگاه الزامی است."
    
            if not data.get("shop_address"):
                errors["ok"] = False
                errors["shop_address"] = "آدرس فروشگاه الزامی است."
    
        if errors:
            raise serializers.ValidationError(errors)
    
        return data

class RegisterVerifyCodeSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=11, required=False, validators=[validate_phone_number])
    code = serializers.CharField(max_length=6)


class LoginSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=11, validators=[validate_phone_number])
    password = serializers.CharField(write_only=True)


class SendOTPSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=11, validators=[validate_phone_number])


class OTPLoginSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=11, validators=[validate_phone_number])
    code = serializers.CharField(max_length=6)

