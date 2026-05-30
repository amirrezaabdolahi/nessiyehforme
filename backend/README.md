# Nessiye Backend

## Installation

### 1. Clone project

```bash
git clone <repository-url>
cd backend
```

### 2. Create virtual environment

```bash
python -m venv env
```

### 3. Activate virtual environment

Windows:

```bash
env\Scripts\activate
```

Linux / Mac:

```bash
source env/bin/activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

### 5. Apply migrations

```bash
python manage.py migrate
```

### 6. Run server

```bash
python manage.py runserver
```

Server will be available at:

```text
http://127.0.0.1:8000
```

---

# API Usage

## Register

### Send OTP

```http
POST /api/accounts/register/
```

Body:

```json
{
  "phone_number": "09121234567",
  "full_name": "Test User",
  "password": "12345678"
}
```

### Verify OTP

```http
POST /api/accounts/verify_register/
```

Body:

```json
{
  "phone_number": "09121234567",
  "code": "123456"
}
```

---

## Login

### Send OTP

```http
POST /api/accounts/send-otp/
```

Body:

```json
{
  "phone_number": "09121234567"
}
```

### Verify OTP

```http
POST /api/accounts/login-otp/
```

Body:

```json
{
  "phone_number": "09121234567",
  "code": "123456"
}
```

Response:

```json
{
  "refresh": "refresh_token",
  "access": "access_token"
}
```

---

## Authenticated Requests

Add access token to request header:

```http
Authorization: Bearer <access_token>
```
