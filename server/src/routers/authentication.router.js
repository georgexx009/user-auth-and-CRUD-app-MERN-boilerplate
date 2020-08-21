// set router
const express = require('express');
const router = express.Router();

const {
  register,
  validateUsername,
  login,
} = require('../middleware/authentication');

// endpoints
router.post('/register', register);
router.post('/validateUsername', validateUsername);
router.post('/login', login);

module.exports = router;
