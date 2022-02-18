from rest_framework import routers
from django.urls import include, re_path, path
from .views import (
    MessageViewSet,
    UserChatsView,
    UserMessageThreadView,
)

router = routers.DefaultRouter()
router.register(r"messages", MessageViewSet)

urlpatterns = [
    re_path(r"^", include(router.urls)),
    re_path(r"^users/(?P<user_id>.+)/messages/$", UserChatsView.as_view()),
    re_path(r"^messages/(?P<toUser>.+)/(?P<fromUser>.+)/thread/$",UserMessageThreadView.as_view()),
]
