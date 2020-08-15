const express = require('express');
const app = express();
const setHeaders = require('./utils/setHeaders');
const bodyParser = require('./utils/bodyParser');
const authenticationRouter = require('./routers/authentication.router');

// set headers to avoid CORS Policy
app.use(setHeaders);
// parser the body of the request
app.use(bodyParser);

// testing path
app.get('/publications', (req, res) => {
  res.send([]);
});

//setting routers
app.use('/authentication', authenticationRouter);

module.exports = app;
