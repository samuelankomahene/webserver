from flask import Flask, jsonify
from datetime import datetime

# Initialize the Flask application
app = Flask(__name__)

# Define the Route (The port/door the server listens to for requests)
@app.route('/api/status', methods=['GET'])
def get_status():
    # Return a JSON response to the Client
    return jsonify({
        "issue": 4,
        "status": "success",
        "message": "REST-API endpoint is functioning correctly via Python/Flask",
        "timestamp": datetime.now().isoformat()
    })

# Start the server on Port 3000
if __name__ == '__main__':
    app.run(port=3000, debug=True)