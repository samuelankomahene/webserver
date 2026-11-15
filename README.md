# Foundation Webserver (Python/Flask)

> **DE:** Grundlegender Python/Flask-Webserver zur Demonstration von HTTP-Routing und JSON-Payloads.
>
> **EN:** Foundational Python/Flask webserver demonstrating core HTTP routing and JSON payloads.

---

## 1. Architecture Overview

This repository contains a foundational Client-Server application built with Python 3 and Flask.
It serves as the architectural precursor to the production [`kontakte-api`](https://github.com/samuelankomahene/kontakte-api) backend,
demonstrating synchronous WSGI routing, static asset delivery, dynamic URL parameter parsing, and JSON payload ingestion.

### Technology Stack
* **Framework:** Python 3 / Flask (`3.1.3`)
* **Frontend Delivery:** Jinja2 Templates (`templates/index.html`) & Static Assets (`static/`)
* **Environment:** Isolated Python Virtual Environment (`venv`) & `requirements.txt`
* **Security:** Production-safe boot configuration (`debug=False`) to prevent Werkzeug debugger code execution

---

## 2. HTTP Routing & REST API Endpoints (`app.py`)

| HTTP Method | Endpoint | Handler Function | Description | Status Code |
| :--- | :--- | :--- | :--- | :--- |
| **`GET`** | `/` | `serve_frontend()` | Renders `templates/index.html` and serves static assets | `200 OK` |
| **`GET`** | `/api/status` | `get_status()` | Health-check endpoint returning operational JSON status and ISO-8601 timestamp | `200 OK` |
| **`GET`** | `/api/greet/<name>` | `greet_user(name)` | Dynamically parses the `<name>` URL variable and returns a parameterized JSON greeting | `200 OK` |
| **`POST`** | `/api/server/register` | `register_server()` | Ingests a JSON payload (`hostname`, `os`) with default fallbacks and echoes registration state | `201 Created` |

---

## 3. Local Development Setup & `curl` Verification

Clone the repository, initialize the virtual environment, and launch the server on port `3000`:

```bash
git clone https://github.com/samuelankomahene/webserver.git
cd webserver
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 app.py
```

Verify the endpoints from a second terminal window:

```bash
# 1. Check API health status (GET)
curl -s http://127.0.0.1:3000/api/status | python3 -m json.tool

# 2. Test dynamic URL routing (GET)
curl -s http://127.0.0.1:3000/api/greet/Samuel | python3 -m json.tool

# 3. Test JSON payload ingestion (POST)
curl -i -X POST http://127.0.0.1:3000/api/server/register \
  -H "Content-Type: application/json" \
  -d '{"hostname": "ubuntu-hetzner-vps", "os": "Ubuntu 24.04 LTS"}'
```

---

## 4. Production Evolution

This repository was engineered as a local routing proof-of-concept.
For the full production deployment utilizing **Nginx Reverse Proxy** (SSL/TLS via Let's Encrypt),
**Gunicorn WSGI** daemonized via `systemd`, and a relational **SQLite3** database on Ubuntu 24.04 LTS, see [`kontakte-api`](https://github.com/samuelankomahene/kontakte-api).
