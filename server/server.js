const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

const userController = require('./controllers');

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
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../public/index.html'));
// });

//Define routes
app.get('/', (req, res) => {
  console.log('Render Dashboard');
  console.log('GET!');

  // return res.status(200).sendFile('../public/login.html');
  return res.sendStatus(200);
});

//get request to /login page
app.get('/login', (req, res) => {
  console.log('Render Login Page');
  return res.status(200).json(res.locals.user);
});

//post request to /login page
app.post('/login', userController.loginUser, (req, res) => {
  console.log('Successful Login!');
  return res.status(200).json(res.locals.user);
});

//get request to /singup page
app.get('/signup', (req, res) => {
  return res.status(200).json(res.locals.user);
});

//post request to /signup page
app.post('/signup', (req, res) => {
  return res.status(200).json(res.locals.user);
});

//get request to /:user
app.get('/:user', (req, res) => {
  return res.status(200).json(res.locals.user);
});

// get request to '/:user/trip/:id'
app.get('/:user/trip/:id', (req, res) => {
  return res.status(200).json(res.locals.user);
});

//get request to /addTrip
app.get('/addTrip', (req, res) => {
  return res.status(200).json(res.locals.user);
});

//post request to /addTrip
app.post('/addTrip', (req, res) => {
  return res.status(200).json(res.locals.user);
});

//get request to /:user/trip/:id/events
app.get('/:user/trip/:id/events', (req, res) => {
  return res.status(200).json(res.locals.user);
});

//post request to /:user/trip/:id/events
app.post('/:user/trip/:id/events', (req, res) => {
  return res.status(200).json(res.locals.user);
});

//patch request to /:user/trip/:id/events
app.patch('/:user/trip/:id/events', (req, res) => {
  return res.status(200).json(res.locals.user);
});

// 404 error
app.all('*', (req, res) => {
  res.sendStatus(404);
});

//Global Error Handling
app.use((err, req, res, next) => {
  console.log(err)
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//Start server and listen on Port 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
