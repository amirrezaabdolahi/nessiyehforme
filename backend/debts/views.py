from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Debt
from .serializers import DebtSerializer


class DebtListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not request.user.is_shop:
            return Response({'ok': False, 'error': 'دسترسی ندارید'}, status=status.HTTP_403_FORBIDDEN)

        debts = Debt.objects.filter(shop=request.user)
        serializer = DebtSerializer(debts, many=True)
        return Response({'ok': True, 'debts': serializer.data})


class DebtDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        if not request.user.is_shop:
            return Response({'ok': False, 'error': 'دسترسی ندارید'}, status=status.HTTP_403_FORBIDDEN)

        try:
            debt = Debt.objects.get(pk=pk, shop=request.user)
        except Debt.DoesNotExist:
            return Response({'ok': False, 'error': 'بدهی یافت نشد'}, status=status.HTTP_404_NOT_FOUND)

        serializer = DebtSerializer(debt)
        return Response({'ok': True, 'debt': serializer.data})

    def delete(self, request, pk):
        if not request.user.is_shop:
            return Response({'ok': False, 'error': 'دسترسی ندارید'}, status=status.HTTP_403_FORBIDDEN)

        try:
            debt = Debt.objects.get(pk=pk, shop=request.user)
        except Debt.DoesNotExist:
            return Response({'ok': False, 'error': 'بدهی یافت نشد'}, status=status.HTTP_404_NOT_FOUND)

        debt.delete()
        return Response({'ok': True, 'message': 'بدهی حذف شد'})
    

