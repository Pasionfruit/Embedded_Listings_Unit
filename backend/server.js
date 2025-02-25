const express = require('express');
const app = express();
const db = require('./db.js')
const routes = require('./routes/listings.js')
const path = require('path');
const port = process.env.PORT || 5000;
// const fs = require('fs');
// const https = require('https');
// const http = require('http');

app.use('/api', routes);

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Test DB connection
db.query('SELECT NOW()')
  .then((res) => console.log(`Connected to DB at: ${res.rows[0].now}`))
  .catch((err) => console.error('Failed to connect to the database:', err));

// Read SSL certificates remove with server
// const privateKey = fs.readFileSync('/etc/letsencrypt/live/unitzo.com/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/unitzo.com/fullchain.pem', 'utf8');
// const credentials = { key: privateKey, cert: certificate };

// Create HTTPS server remove with server
// https.createServer(credentials, app).listen(port, () => {
//     console.log('HTTPS Server running on https://unitzo.com');
// });

// // Optionally, create HTTP server to redirect to HTTPS
// http.createServer(app).listen(80, () => {
//     console.log('HTTP Server running and redirecting to HTTPS');
// });

// run locally
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });