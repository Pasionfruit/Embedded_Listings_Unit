const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');
const app = express();
const port = process.env.PORT || 5000;

// Read SSL certificates remove with server
const privateKey = fs.readFileSync('/etc/letsencrypt/live/unitzo.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/unitzo.com/fullchain.pem', 'utf8');

// Create credentials object
const credentials = { key: privateKey, cert: certificate };

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/api/your-api', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Create HTTPS server remove with server
https.createServer(credentials, app).listen(443, () => {
    console.log('HTTPS Server running on https://unitzo.com');
});

// Optionally, create HTTP server to redirect to HTTPS
http.createServer(app).listen(80, () => {
    console.log('HTTP Server running and redirecting to HTTPS');
});

// run locally
// app.listen(5000, () => {
//     console.log(`Server running on port 5000`);
//   });