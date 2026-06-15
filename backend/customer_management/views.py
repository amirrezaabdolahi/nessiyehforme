from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from accounts.models import User
from .models import CustomerShop
from .serializers import CustomerSerializer
from sales.models import Sale
from sales.serializers import SaleSerializer
from debts.models import Debt
from debts.serializers import DebtSerializer


class CustomerListCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not request.user.is_shop:
            return Response({'ok': False, 'error': 'دسترسی ندارید'}, status=status.HTTP_403_FORBIDDEN)

        customer_ids = CustomerShop.objects.filter(shop=request.user).values_list('customer_id', flat=True)
        customers = User.objects.filter(id__in=customer_ids)
        serializer = CustomerSerializer(customers, many=True)
        return Response({'ok': True, 'customers': serializer.data})

    def post(self, request):
        if not request.user.is_shop:
            return Response({'ok': False, 'error': 'دسترسی ندارید'}, status=status.HTTP_403_FORBIDDEN)

        phone_number = request.data.get('phone_number')
        if not phone_number:
            return Response({'ok': False, 'error': 'شماره تلفن الزامی است'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            customer = User.objects.get(phone_number=phone_number, is_shop=False)
        except User.DoesNotExist:
            return Response({'ok': False, 'error': 'کاربر یافت نشد'}, status=status.HTTP_404_NOT_FOUND)

        if CustomerShop.objects.filter(shop=request.user, customer=customer).exists():
            return Response({'ok': False, 'error': 'این مشتری قبلاً اضافه شده است'}, status=status.HTTP_400_BAD_REQUEST)

        CustomerShop.objects.create(shop=request.user, customer=customer)
        serializer = CustomerSerializer(customer)
        return Response({'ok': True, 'message': 'مشتری اضافه شد', 'customer': serializer.data}, status=status.HTTP_201_CREATED)


class CustomerDeleteView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):
        if not request.user.is_shop:
            return Response({'ok': False, 'error': 'دسترسی ندارید'}, status=status.HTTP_403_FORBIDDEN)

        try:
            relation = CustomerShop.objects.get(shop=request.user, customer_id=pk)
        except CustomerShop.DoesNotExist:
            return Response({'ok': False, 'error': 'مشتری یافت نشد'}, status=status.HTTP_404_NOT_FOUND)

        relation.delete()
        return Response({'ok': True, 'message': 'مشتری حذف شد'})
    

class CustomerHistoryView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        if not request.user.is_shop:
            return Response({'ok': False, 'error': 'دسترسی ندارید'}, status=status.HTTP_403_FORBIDDEN)

        if not CustomerShop.objects.filter(shop=request.user, customer_id=pk).exists():
            return Response({'ok': False, 'error': 'این مشتری در لیست شما نیست'}, status=status.HTTP_404_NOT_FOUND)

        sales = Sale.objects.filter(shop=request.user, customer_id=pk).prefetch_related('items__product')
        debts = Debt.objects.filter(shop=request.user, customer__customer_id=pk)

        return Response({
            'ok': True,
            'customer': CustomerSerializer(User.objects.get(id=pk)).data,
            'sales': SaleSerializer(sales, many=True).data,
            'debts': DebtSerializer(debts, many=True).data
        })