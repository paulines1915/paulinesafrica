from django.urls import path

from .views import ReadingListView, ReadingDetailView

urlpatterns = [
    path('', ReadingListView.as_view()),
    path('<pk>', ReadingDetailView.as_view())
]
