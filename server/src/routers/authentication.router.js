// set router
const express = require('express');
const router = express.Router();

const {
  register,
  validateUsername,
} = require('../middleware/authentication.mw');

router.post('/register', register);
router.post('/validateUsername', validateUsername);

module.exports = router;
