import os
import requests
import json
import uuid
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import BillingSerializer, PaymentSerializer, RateSerializer, TestPaymentSerializer
from ..models import Billing, Payment, Rate
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework import exceptions, status, generics
from ...schools.models import Course
from ...accounts.models import User
from ..utils import generate_unique_tx_ref
from rest_framework.response import Response
from rest_framework.parsers import JSONParser


class BillingViewSet(viewsets.ModelViewSet):
    serializer_class = BillingSerializer
    queryset = Billing.objects.all()
    permission_classes = [permissions.IsAuthenticated]

class PaymentViewSet(viewsets.ModelViewSet):
    serializer_class = PaymentSerializer
    queryset = Payment.objects.all()
    permission_classes = [permissions.IsAuthenticated]

class RateViewSet(viewsets.ModelViewSet):
    serializer_class = RateSerializer
    queryset = Rate.objects.all()
    permission_classes = [permissions.IsAuthenticated]

@swagger_auto_schema(
    method="POST",
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            "course_id": openapi.Schema(type=openapi.TYPE_STRING),
            "user_id": openapi.Schema(type=openapi.TYPE_STRING),
        },
    ),
)
@api_view(["POST"])
def flutterwave_initiatepayment_view(request, *args, **kwargs):
    course_id = request.data.get("course_id", None)
    user_id = request.data.get("user_id", None)
    course = get_object_or_404(Course.objects.all(), id=course_id)
    user = get_object_or_404(User.objects.all(), id=user_id)
    rate = get_object_or_404(Rate.objects.all(), course_id = course_id)
    billing = get_object_or_404(Billing.objects.all(), user_id= user_id)

    try:
        payload = {
            "tx_ref": generate_unique_tx_ref(),
            "amount": str(rate.price.amount),
            "currency": "USD",
            "card_number":"",
            "cvv":"",
            "expiry_month": billing.cc_exp_month,
            "expiry_year": billing.cc_exp_year,
            "fullname": user.first_name + ' ' + user.last_name,
            "email":user.email,
            "redirect_url":"",
            "payment_options":"card",
            "meta":{
                "course_id": str(course.id),
                "course_name": course.name
            },
            "customer":{
                "email":user.email,
                "name":user.first_name + ' ' + user.last_name
            },
            "customizations":{
                "title":"Protutor",
                "description":"Course Payment",
                "logo":"https://cdn.filestackcontent.com/lrgzCJTrT0iTPDT2ii20"
            }
        }

        headers = {"Content-Type": "application/json", "Authorization": "Bearer %s" % os.getenv("Flutterwave_Secret_Key")}
        response = requests.post(os.getenv("Flutterwave_charge_card"), json=payload, headers=headers)
        payment = json.loads(response.text)
        return Response(payment)
    except Exception as error:
        raise  exceptions.APIException(error)

class FlutterWebhookView(generics.CreateAPIView):
    """
    Method that is called back by Flutterwave in the case of a payment
    """
    serializer_class = TestPaymentSerializer
    queryset = Payment.objects.all()
    http_method_names = ['post', 'put', 'patch', 'get']
    permission_classes = (permissions.AllowAny,)

    def create(self, request, *args, **kwargs):
        print(request.data)
        return Response(request.data, status=status.HTTP_200_OK)
