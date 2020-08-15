const whitelist = ['http://localhost:3000', 'http://localhost:8080'];

const setHeaders = function (req, res, next) {
  const origin = req.headers.origin;

  //check if the request origin is in our whitelist
  if (whitelist.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-type, Authorization, Accept'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
};

module.exports = setHeaders;
