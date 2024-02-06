from django.contrib import admin
from .models import Category, Article, ContactMessage

# CHANGING TABLE LAYOUT
class categoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category_date')

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id', 'category', 'title', 'location', 'tags', 'author', 'post_date')
    list_filter = ['category']

class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'email', 'message', 'message_date')
    list_filter = ['message_date']

# Register your models here.
admin.site.register(Category, categoryAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(ContactMessage, ContactMessageAdmin)
