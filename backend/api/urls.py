from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import CategoryView, ArticleView, ContactMessageView

post_router = DefaultRouter()
post_router.register(r'category', CategoryView)
post_router.register(r'article', ArticleView)
post_router.register(r'contactus', ContactMessageView)

urlpatterns = post_router.urls