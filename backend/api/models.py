from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.utils.text import slugify

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50)
    category_date = models.DateTimeField(default=timezone.now)
    slug = models.SlugField(unique=True, max_length=50, null=True, blank=True)

    def save(self, *args, **kwargs):
        # Generate slug from the name if it's not provided
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Article(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=50)
    tags = models.CharField(max_length=50, null=True)
    about = models.TextField()
    requirements = models.TextField()
    job_link = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    post_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='article_images/', default='/article_images/defImg.webp', blank=True)
    slug = models.SlugField(unique=True, max_length=50, null=True, blank=True)

    def save(self, *args, **kwargs):
        # Generate slug from the title if it's not provided
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    message_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name
    
class Social(models.Model):
    title = models.CharField(max_length=100)
    social_media_link = models.TextField()

    def __str__(self):
        return self.title
