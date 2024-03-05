from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import CategoryView, ArticleView, ContactMessageView, SocialsView

post_router = DefaultRouter()
post_router.register(r'category', CategoryView, basename='category')
post_router.register(r'article', ArticleView)
post_router.register(r'contactus', ContactMessageView)
post_router.register(r'socials', SocialsView)

urlpatterns = post_router.urls