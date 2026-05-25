from flask import Flask, jsonify, render_template
from datetime import datetime

# Initialize the Flask application
app = Flask(__name__)

# --- THE MISSING FRONT DOOR (Serve the HTML) ---
@app.route('/', methods=['GET'])
def serve_frontend():
    # Flask automatically looks inside the 'templates' folder for this file
    return render_template('index.html')

# --- THE BACKEND API ---
@app.route('/api/status', methods=['GET'])
def get_status():
    return jsonify({
        "issue": 4,
        "status": "success",
        "message": "REST-API endpoint is functioning correctly via Python/Flask",
        "timestamp": datetime.now().isoformat()
    })

# Start the server on Port 3000
if __name__ == '__main__':
    app.run(port=3000, debug=True)