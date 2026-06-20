from django.db import models
from accounts.models import User
from products.models import Product


class Sale(models.Model):
    """Sale sales"""
    shop = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sales')
    customer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='purchases')
    is_debt = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Sale #{self.id} - {self.shop}"


class SaleItem(models.Model):
    """Sale > sale items"""
    sale = models.ForeignKey(Sale, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.PositiveBigIntegerField()

    def __str__(self):
        return f"{self.product.name} x{self.quantity}"