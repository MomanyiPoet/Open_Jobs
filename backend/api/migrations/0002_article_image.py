# Generated by Django 5.0.1 on 2024-02-14 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='image',
            field=models.ImageField(default='/article_images/defImg.jpg', upload_to='article_images/'),
        ),
    ]
