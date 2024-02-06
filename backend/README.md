## OPEN JOBS PROJECT - DJANGO BACKEND DEVELOPMENT

## Table of contents

- [Overview](#overview)
    - [Introduction](#introduction)
- [Process + Development](#process-+-development)
    - [Creating a Django Project](#creating-a-django-project)
- [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### Introduction
- Open jobs built with Django REST Framework for the backend. This project aims to provide a dynamic and interactive platform for creating and sharing blog posts.

## Process + Development

### Creating a Django Project

1. **Install Python:**

    ```bash
    # Check python version
    python --version
    ```

2. **Install Django Project:**

    ```bash
    mkdir backEnd
    cd backEnd

    # Install django with pip in a virtual environment
    sudo apt install python3-pip python3-venv

    # Create virtual environment within the project
    python3 -m venv my_env

    # activate the environment
    source my_env/bin/activate
    # deactivate the environment
    deactivate

    # install django
    pip install django
    pip install djangorestframework
    pip install django-cors-headers
    python -m pip install Pillow
    django-admin startproject openjobs .
    python manage.py collectstatic
    python manage.py runserver
    ```

3. **Setup Database, createsuperuser and makemigrations**
    ```bash
    # setup postgresql database
    pip install psycopg2-binary
    pip install python-decouple
    # create createsuperuser
    python manage.py createsuperuser
    # make migrations
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```

## Useful Resources
- [Django project in Ubuntu](https://www.youtube.com/watch?v=BSRN0hC96L8)
- [Hiding Secret Keys](https://medium.com/@natmakesthings/hiding-secret-key-in-django-deployment-on-heroku-59b9640819a)

## Author

- Momanyi Brian - [Portfolio Website](https://momanyi-brian-portfolio.vercel.app)
- Elijah