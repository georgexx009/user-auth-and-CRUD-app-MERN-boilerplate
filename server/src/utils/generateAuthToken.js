const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generateAuthToken = id => jwt.sign({ _id: id }, process.env.PRIVATE_KEY);

module.exports = generateAuthToken;
