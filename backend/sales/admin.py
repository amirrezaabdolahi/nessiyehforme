from django.contrib import admin
from .models import Sale, SaleItem


class SaleItemInline(admin.TabularInline):
    model = SaleItem
    extra = 0
    readonly_fields = ['product', 'quantity', 'price']


@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    list_display = ['id', 'shop', 'customer', 'total_price', 'created_at']
    list_filter = ['shop', 'created_at']
    readonly_fields = ['created_at']
    inlines = [SaleItemInline]

    def total_price(self, obj):
        return sum(item.price * item.quantity for item in obj.items.all())
    total_price.short_description = 'total price'


@admin.register(SaleItem)
class SaleItemAdmin(admin.ModelAdmin):
    list_display = ['id', 'sale', 'product', 'quantity', 'price']
    list_filter = ['sale__shop']