from flask import Flask, jsonify, render_template, request
from datetime import datetime

# Initialize the Flask application
app = Flask(__name__)

# --- THE FRONT DOOR (Serve the HTML) ---
@app.route('/', methods=['GET'])
def serve_frontend():
    return render_template('index.html')

# --- THE BACKEND API (Static) ---
@app.route('/api/status', methods=['GET'])
def get_status():
    return jsonify({
        "issue": 4,
        "status": "success",
        "message": "REST-API endpoint is functioning correctly via Python/Flask",
        "timestamp": datetime.now().isoformat()
    })

# --- THE BACKEND API (Dynamic URL) ---
@app.route('/api/greet/<name>', methods=['GET'])
def greet_user(name):
    return jsonify({
        "status": "success",
        "message": f"Hello {name}! Your dynamic infrastructure is working.",
        "timestamp": datetime.now().isoformat()
    })

# --- NEW: DATA INGESTION (POST Request) ---
@app.route('/api/server/register', methods=['POST'])
def register_server():
    # 1. Unpack the hidden JSON payload from the incoming network traffic
    incoming_data = request.get_json()
    
    # 2. Extract specific variables from that payload
    server_name = incoming_data.get("hostname", "Unknown Server")
    os_type = incoming_data.get("os", "Unknown OS")
    
    # 3. Send a response back confirming we received and processed the data
    # Notice we return a 201 status code (Created) instead of the default 200 (OK)
    return jsonify({
        "status": "success",
        "message": f"Server '{server_name}' running '{os_type}' successfully registered.",
        "received_payload": incoming_data,
        "timestamp": datetime.now().isoformat()
    }), 201

# Start the server on Port 3000
if __name__ == '__main__':
    app.run(port=3000, debug=True)