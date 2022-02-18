from django.db.models import Q
from rest_framework import (
    viewsets,
    generics,
    exceptions,
)
from rest_framework.permissions import (
    IsAuthenticated,
)
from apps.core.validators import is_valid_uuid
from apps.accounts.models import User
from apps.core.permissions import IsOwnerOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from ..models import Message
from .serializers import MessageSerializer


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["category"]
    ordering = ["-date_modified"]

class UserChatsView(generics.ListAPIView):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["category"]
    ordering = ["-date_created"]

    def get(self, request, *args, **kwargs):
        user_id = kwargs.get("user_id", None)
        if not is_valid_uuid(user_id):
            raise exceptions.ValidationError("Invalid user_id")

        if user_id:
            try:
                user = User.objects.filter(id=user_id).first()
                self.queryset = self.queryset.filter(
                    Q(from_user=user)
                    | Q(to_user=user)
                )

            except Exception as error:
                raise exceptions.APIException(error)

        return super().get(self, request, *args, **kwargs)

class UserMessageThreadView(generics.ListAPIView):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["category"]
    ordering = ["-date_created"]
    
    def get(self, request, *args, **kwargs):
        user_ids = []
        toUser = kwargs.get("toUser", None)
        user_ids.append(toUser)
        fromUser = kwargs.get("fromUser", None)
        user_ids.append(fromUser)

        for user_id in user_ids:
            if not is_valid_uuid(user_id):
                raise exceptions.ValidationError("Invalid user_id")
        
        if toUser and fromUser:
            try:
                to_user = User.objects.filter(id=toUser).first()
                from_user = User.objects.filter(id=fromUser).first()
                self.queryset = self.queryset.filter(
                    Q(from_user=(to_user or from_user))
                    | Q(to_user=(to_user or from_user))
                )
            except Exception as error:
                raise exceptions.APIException(error)

        return super().get(self, request, *args, **kwargs)