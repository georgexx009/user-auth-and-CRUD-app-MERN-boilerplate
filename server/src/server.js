const express = require('express');
const app = express();
const setHeaders = require('./utils/setHeaders');
const bodyParser = require('./utils/bodyParser');
const authenticationRouter = require('./routers/authentication.router');
const postsRouter = require('./routers/posts.router');
const testRouter = require('./routers/test.router');

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
app.use('/posts', postsRouter);
app.use('/test', testRouter);

module.exports = app;
