from rest_framework.serializers import ModelSerializer
from .models import Category, Article, ContactMessage

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'category_date')

class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'category', 'title', 'location', 'tags', 'about', 'requirements', 'job_link', 'author', 'post_date')

class ContactMessageSerializer(ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ('id', 'full_name', 'email', 'message', 'message_date')
