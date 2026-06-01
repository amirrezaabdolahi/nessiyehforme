from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, phone_number=None, full_name=None, password=None, is_shop=False, shop_name=None, shop_address=None):
        if not phone_number:
            raise ValueError('user must have a phone number')
        
        if not full_name:
            raise ValueError('user must have a full name')
        
        user = self.model(
            phone_number=phone_number,
            full_name=full_name,
            is_shop=is_shop,
            shop_name=shop_name,
            shop_address=shop_address
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, phone_number=None, full_name=None, password=None):
        user = self.create_user(
            phone_number=phone_number,
            full_name=full_name,
            password=password
        )
        user.is_admin = True
        user.save(using=self._db)
        return user