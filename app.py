from flask import Flask, jsonify, render_template, request
from datetime import datetime

# --- SYSTEM INITIALIZATION ---
app = Flask(__name__)

# --- REST API ENDPOINTS ---

@app.route('/', methods=['GET'])
def serve_frontend():
    """ Serves the static frontend HTML interface to the client. """
    return render_template('index.html')

@app.route('/api/status', methods=['GET'])
def get_status():
    """ Returns a static JSON payload confirming API operational status. """
    return jsonify({
        "status": "success",
        "message": "REST-API endpoint is functioning correctly via Python/Flask",
        "timestamp": datetime.now().isoformat()
    }), 200

@app.route('/api/greet/<name>', methods=['GET'])
def greet_user(name):
    """ Dynamically parses the URL variable and returns a parameterized JSON response. """
    return jsonify({
        "status": "success",
        "message": f"Hello {name}! Your dynamic infrastructure is working.",
        "timestamp": datetime.now().isoformat()
    }), 200

@app.route('/api/server/register', methods=['POST'])
def register_server():
    """ Ingests a JSON payload and extracts system variables for mock server registration. """
    incoming_data = request.get_json()
    
    # Implement safe default fallbacks if payload keys are missing
    server_name = incoming_data.get("hostname", "Unknown Server")
    os_type = incoming_data.get("os", "Unknown OS")
    
    return jsonify({
        "status": "success",
        "message": f"Server '{server_name}' running '{os_type}' successfully registered.",
        "received_payload": incoming_data,
        "timestamp": datetime.now().isoformat()
    }), 201

# --- SERVER BOOT ---
if __name__ == '__main__':
    # SECURITY NOTICE: debug=True is strictly disabled for production environments
    # to prevent Werkzeug arbitrary code execution vulnerabilities.
    app.run(port=3000, debug=False)