from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Category, Article, ContactMessage
from .serializers import CategorySerializer, ArticleSerializer, ContactMessageSerializer

# Create your views here.
class CategoryView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ArticleView(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ContactMessageView(ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer