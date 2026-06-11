from django.contrib import admin
from .models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    search_fields = ['name']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'shop', 'category', 'buy_price', 'sell_price', 'stock', 'created_at']
    list_filter = ['shop', 'category']
    search_fields = ['name', 'barcode']
    readonly_fields = ['created_at', 'updated_at']