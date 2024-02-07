from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Category, Article, ContactMessage
from .serializers import CategorySerializer, ArticleSerializer, ContactMessageSerializer

# Create your views here.
class CategoryView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ArticleView(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    @action(detail=False, methods=['GET'])
    def by_category(self, request):
        try:
            category_id = request.query_params.get('category', None)
            if category_id is not None:
                articles = Article.objects.filter(category=category_id)
                serialized_articles = self.get_serializer(articles, many=True).data
                return Response(serialized_articles)
            else:
                return Response({'error': 'Category parameter is required'})
        except Exception as e:
            return Response({'error': str(e)})

class ContactMessageView(ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer