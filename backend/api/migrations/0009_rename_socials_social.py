# Generated by Django 5.0.1 on 2024-03-05 12:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_socials'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Socials',
            new_name='Social',
        ),
    ]
