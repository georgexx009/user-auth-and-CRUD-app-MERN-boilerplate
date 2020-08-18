const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const auth = (req, res, next) => {
  // get token from the header if it is present
  const token = req.headers['x-access-token'] || req.headers['authorization'];

  // if token not found, return response without calling next mw function
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    // check if user is the same
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Failure at verify jwt token');
    console.error(err);
    res.status(400).send('Invalid token');
  }
};

module.exports = auth;
