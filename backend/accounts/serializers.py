from rest_framework import serializers


class RegisterSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=11)
    full_name = serializers.CharField(max_length=255)
    password = serializers.CharField(write_only=True)

class RegisterVerifyCodeSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=11, required=False)
    code = serializers.CharField(max_length=6)


class LoginSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=11)
    password = serializers.CharField(write_only=True)


class SendOTPSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=11)


class OTPLoginSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=11)
    code = serializers.CharField(max_length=6)