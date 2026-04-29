// 1. Import the Express framework
const express = require('express');

// 2. Initialize the Express application
const app = express();

// 3. Define the Port
const PORT = 3000;

// --- ROUTES ---

// 4. Create a basic root route
app.get('/', (req, res) => {
    res.send('Hello World! My Hamann Solutions Webserver is running.');
});

// 5. Create your JSON REST-API Endpoint (Issue #4 Requirement)
app.get('/api/status', (req, res) => {
    res.json({
        issue: 4,
        status: 'success',
        message: 'REST-API endpoint is functioning correctly',
        timestamp: new Date()
    });
});

// --- START SERVER ---

// 6. Tell the server to start listening
app.listen(PORT, () => {
    console.log(`✅ Server is running and listening at http://localhost:${PORT}`);
    console.log(`✅ Test the API endpoint at http://localhost:${PORT}/api/status`);
});