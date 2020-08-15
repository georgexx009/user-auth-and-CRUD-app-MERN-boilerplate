const express = require('express');
const app = express();
const { setHeaders } = require('./utils/setHeaders');

// set headers to avoid CORS Policy
app.use(setHeaders);

// testing path
app.get('/publications', (req, res) => {
  res.send([]);
});

module.exports = app;
