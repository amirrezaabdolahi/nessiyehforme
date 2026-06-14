from django.contrib import admin
from .models import Debt


@admin.register(Debt)
class DebtAdmin(admin.ModelAdmin):
    list_display = ['id', 'get_customer', 'shop', 'amount', 'paid_amount', 'get_remaining', 'is_paid', 'created_at']
    list_filter = ['shop', 'created_at']
    search_fields = ['customer__customer__full_name', 'customer__customer__phone_number']
    readonly_fields = ['created_at']

    def get_customer(self, obj):
        return obj.customer.customer.full_name
    get_customer.short_description = 'Customer'

    def get_remaining(self, obj):
        return obj.remaining
    get_remaining.short_description = 'Remaining'