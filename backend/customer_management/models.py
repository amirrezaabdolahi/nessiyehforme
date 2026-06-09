from django.db import models
from accounts.models import User

class CustomerShop(models.Model):
    shop = models.ForeignKey(User, on_delete=models.CASCADE, related_name='customers')
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='shops')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('shop', 'customer')

    def __str__(self):
        return f"{self.shop} - {self.customer}"
