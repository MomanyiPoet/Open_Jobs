from rest_framework.serializers import ModelSerializer
from .models import Category, Article, ContactMessage, Social

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'category_date', 'slug')

class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'category', 'title', 'location', 'tags', 'about', 'requirements', 'job_link', 'author', 'post_date', 'image', 'slug')

class ContactMessageSerializer(ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ('id', 'full_name', 'email', 'message', 'message_date')

class SocialSerializer(ModelSerializer):
    class Meta:
        model = Social
        fields = ('id', 'title', 'social_media_link')
