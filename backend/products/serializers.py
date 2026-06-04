from rest_framework import serializers
from .models import Product, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        required=False,
        allow_null=True
    )
    category_name = serializers.SerializerMethodField()
    shop_name = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'price', 'stock', 'image',
            'category', 'category_name', 'shop', 'shop_name', 'created_at'
        ]
        read_only_fields = ['shop', 'created_at']

    def get_category_name(self, obj):
        return obj.category.name if obj.category else None

    def get_shop_name(self, obj):
        return obj.shop.shop_name if obj.shop else None