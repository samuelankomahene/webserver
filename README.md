# Foundation Webserver (Python/Flask)

## Architecture Overview
This repository contains a foundational Client-Server architecture built with Python and Flask. It serves as the structural precursor to the production `kontakte-api`, demonstrating core backend routing, static asset serving, and JSON payload interception.

### Technology Stack
- **Framework:** Python 3 / Flask
- **Environment:** Isolated Virtual Environment (`venv`)
- **Dependencies:** Managed via `requirements.txt`

## Core Network Pipelines
- **Static Asset Delivery:** Serves the frontend UI (HTML, CSS, JS, Images) on Port 3000.
- **Dynamic GET Routing:** Exposes an `/api/greet/<name>` endpoint that dynamically parses URL variables and returns parameterized JSON responses.
- **Data Ingestion (POST):** Includes an `/api/server/register` endpoint capable of intercepting JSON payloads, extracting system variables (e.g., hostname and OS), and executing a `201 Created` HTTP status code.

## Production Context
*Note for Reviewers:* This repository was engineered as a local development and routing proof-of-concept. For the enterprise-grade implementation of these concepts—utilizing Gunicorn, Nginx reverse proxying, and `systemd` daemonization on a Hetzner Ubuntu VPS—please refer to the `kontakte-api` repository.