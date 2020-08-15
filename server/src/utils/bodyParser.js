const bodyParser = (req, res, next) => {
  let queryData = '';

  req.on('data', data => {
    queryData += data;
  });

  req.on('end', () => {
    if (queryData) {
      req.body = JSON.parse(queryData);
    }
    next();
  });
};

module.exports = bodyParser;
