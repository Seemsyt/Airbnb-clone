# Airbnb Clone (Next.js + Django REST Framework)

A full-stack Airbnb clone built using **Next.js** for the frontend and **Django REST Framework (DRF)** for the backend. This project replicates core Airbnb functionality including property listings, booking, authentication, and messaging.

---

# Features

## Core Features

* User authentication (Register, Login, Logout)
* Property listing creation
* Property search and filtering
* Booking system
* Conversation and messaging system
* User profiles
* Image uploads
* Favorites / Wishlist

## Advanced Features

* JWT authentication
* Real-time chat (optional with WebSockets)
* Responsive design
* Secure API

---

# Tech Stack

## Frontend

* Next.js
* React
* Tailwind CSS
* Axios
* Context API or Zustand

## Backend

* Django
* Django REST Framework
* PostgreSQL
* JWT Authentication
* Pillow (for images)

## Optional

* Redis
* WebSockets (Django Channels)
* Docker

---

# Architecture

```
Frontend (Next.js)
   |
   | REST API
   |
Backend (DRF)
   |
Database (PostgreSQL)
```

---

# Project Structure

## Backend (DRF)

```
backend/
├── users/
├── listings/
├── bookings/
├── conversations/
├── core/
└── manage.py
```

## Frontend (Next.js)

```
frontend/
├── app/
├── components/
├── lib/
├── context/
└── public/
```

---

# Installation Guide

## Backend Setup

### 1. Create virtual environment

```bash
python -m venv venv
source venv/bin/activate
```

### 2. Install dependencies

```bash
pip install django djangorestframework psycopg2 pillow djangorestframework-simplejwt
```

### 3. Create project

```bash
django-admin startproject core
cd core
python manage.py startapp users
python manage.py startapp listings
python manage.py startapp bookings
python manage.py startapp conversations
```

### 4. Run migrations

```bash
python manage.py migrate
```

### 5. Run server

```bash
python manage.py runserver
```

---

## Frontend Setup

### 1. Create Next.js project

```bash
npx create-next-app@latest frontend
cd frontend
```

### 2. Install dependencies

```bash
npm install axios
npm install tailwindcss
```

### 3. Run frontend

```bash
npm run dev
```

---

# API Design

## Authentication

```
POST   /api/register/
POST   /api/login/
GET    /api/profile/
```

## Listings

```
GET    /api/listings/
POST   /api/listings/
GET    /api/listings/{id}/
```

## Bookings

```
POST   /api/bookings/
GET    /api/bookings/
```

## Conversations

```
GET    /api/conversations/
POST   /api/conversations/
GET    /api/messages/
POST   /api/messages/
```

---

# Database Models

## User

* id
* name
* email
* password

## Listing

* id
* title
* description
* price
* owner
* image

## Booking

* id
* user
* listing
* start_date
* end_date

## Conversation

* id
* users

## Message

* id
* conversation
* sender
* content

---

# Authentication Flow

1. User logs in
2. Backend returns JWT token
3. Frontend stores token
4. Frontend sends token in headers

```
Authorization: Bearer <token>
```

---

# Frontend Pages

```
/
/listings/[id]
/login
/register
/conversations
/profile
```

---

# Deployment

## Backend

* Deploy on:

  * DigitalOcean
  * Railway
  * Render

## Frontend

* Deploy on:

  * Vercel

---

# Future Improvements

* Real-time messaging
* Payment integration
* Notifications
* Reviews and ratings

---

# Learning Goals

This project teaches:

* Full-stack development
* API design
* Authentication
* Database design
* Production architecture

---



---

# Author

Seems Kushwaha

---

This project is intended for educational purposes and portfolio use.
