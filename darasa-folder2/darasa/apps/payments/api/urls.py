from rest_framework import routers
from django.urls import include, re_path, path
from .views import PaymentViewSet, BillingViewSet, RateViewSet, flutterwave_initiatepayment_view,FlutterWebhookView

router = routers.DefaultRouter()
router.register(r"", PaymentViewSet)
router.register(r"billings", BillingViewSet)
router.register(r"rates", RateViewSet)


urlpatterns = [
    re_path(r"^initiate-payment/$", flutterwave_initiatepayment_view),
    re_path(r"^webhook/$", FlutterWebhookView.as_view(), name="webhook_view"),
    re_path(r"^", include(router.urls))
]
