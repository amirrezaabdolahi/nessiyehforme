from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.db import transaction

from .models import Sale, SaleItem
from .serializers import SaleSerializer, SaleItemSerializer
from products.models import Product
from accounts.models import User


class SaleListCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not request.user.is_shop:
            return Response({'ok': False, 'error': 'دسترسی ندارید'}, status=status.HTTP_403_FORBIDDEN)

        sales = Sale.objects.filter(shop=request.user).prefetch_related('items__product')
        serializer = SaleSerializer(sales, many=True)
        return Response({'ok': True, 'sales': serializer.data})

    @transaction.atomic
    def post(self, request):
        if not request.user.is_shop:
            return Response({'ok': False, 'error': 'دسترسی ندارید'}, status=status.HTTP_403_FORBIDDEN)

        items_data = request.data.get('items', [])
        customer_id = request.data.get('customer_id', None)

        if not items_data:
            return Response({'ok': False, 'error': 'حداقل یک محصول الزامی است'}, status=status.HTTP_400_BAD_REQUEST)

        customer = None
        if customer_id:
            try:
                customer = User.objects.get(id=customer_id, is_shop=False)
            except User.DoesNotExist:
                return Response({'ok': False, 'error': 'مشتری یافت نشد'}, status=status.HTTP_404_NOT_FOUND)

        serializer = SaleItemSerializer(data=items_data, many=True)
        serializer.is_valid(raise_exception=True)

        sale = Sale.objects.create(shop=request.user, customer=customer)

        for item in serializer.validated_data:
            try:
                product = Product.objects.get(id=item['product_id'], shop=request.user)
            except Product.DoesNotExist:
                raise Exception(f"محصول {item['product_id']} یافت نشد")

            if product.stock < item['quantity']:
                return Response(
                    {'ok': False, 'error': f"کافی نیست {product.name} موجودی"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            SaleItem.objects.create(
                sale=sale,
                product=product,
                quantity=item['quantity'],
                price=product.sell_price
            )

            product.stock -= item['quantity']
            product.save()

        result = SaleSerializer(sale)
        return Response({'ok': True, 'message': 'فروش با موفقیت ثبت شد', 'sale': result.data}, status=status.HTTP_201_CREATED)


class SaleDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        if not request.user.is_shop:
            return Response({'ok': False, 'error': 'دسترسی ندارید'}, status=status.HTTP_403_FORBIDDEN)

        try:
            sale = Sale.objects.prefetch_related('items__product').get(pk=pk, shop=request.user)
        except Sale.DoesNotExist:
            return Response({'ok': False, 'error': 'فروش یافت نشد'}, status=status.HTTP_404_NOT_FOUND)

        serializer = SaleSerializer(sale)
        return Response({'ok': True, 'sale': serializer.data})