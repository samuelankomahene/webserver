# Backend Webserver (Python/Flask)
## System Architecture: Python/Flask Webserver

This project utilizes a Client-Server architecture built with Python and Flask.

### Key Capabilities:
* **Static File Hosting:** Serves the frontend UI (HTML, CSS, JS, Images) on Port 3000.
* **Dynamic GET Routing:** Includes a `/api/greet/<name>` endpoint that dynamically reads URL variables and returns a custom JSON response.
* **Data Ingestion (POST):** Includes a `/api/server/register` endpoint capable of intercepting JSON payloads, extracting variables (like hostname and OS), and returning a `201 Created` status code.

### How to Run the Server Locally:
1. Ensure your virtual environment is active: `source venv/bin/activate` (Mac/Linux)
2. Start the Flask application: `python app.py`
3. Open your browser and navigate to: `http://localhost:3000/`