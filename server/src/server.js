const express = require('express');
const app = express();
const setHeaders = require('./utils/setHeaders');
const bodyParser = require('./utils/bodyParser');

// set headers to avoid CORS Policy
app.use(setHeaders);
// parser the body of the request
app.use(bodyParser);

// testing path
app.get('/publications', (req, res) => {
  res.send([]);
});

module.exports = app;
