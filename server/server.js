const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// Parse incoming URL data
app.use(express.urlencoded({ extended: true }));

// Accept incoming requests from the front end which is on another server
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

// Serve static files from the dist directory
app.use(express.static(path.resolve(__dirname, '../dist')));

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
