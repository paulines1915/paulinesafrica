from rest_framework.generics import ListAPIView, RetrieveAPIView

from api.models import Reading
from .serializers import ReadingSerializer


class ReadingListView(ListAPIView):
    queryset = Reading.objects.all()
    serializer_class = ReadingSerializer


class ReadingDetailView(RetrieveAPIView):
    queryset = Reading.objects.all()
    serializer_class = ReadingSerializer
