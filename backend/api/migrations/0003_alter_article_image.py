# Generated by Django 5.0.1 on 2024-02-14 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_article_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='image',
            field=models.ImageField(default='/article_images/defImg.webp', upload_to='article_images/'),
        ),
    ]