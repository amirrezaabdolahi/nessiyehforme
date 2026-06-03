from rest_framework import serializers
from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ProductSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)
    shop = serializers.CharField(source='shop.username', read_only=True)

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'description', 'price', 'stock', 'image',
            'category', 'category_name', 'shop_name', 'created_at', 'updated_at', 'category'
        ]
        read_only_fields = ['shop', 'created_at']