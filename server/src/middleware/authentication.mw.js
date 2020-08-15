const {
  registerNewUserService,
  validateUsernameService,
} = require('../services/authentication.service');
const generateAuthToken = require('../utils/generateAuthToken');

const register = async (req, res, next) => {
  const newUser = await registerNewUserService(req.body);
  if (!newUser) {
    res.sendStatus(400);
  } else {
    const bodyRes = {
      user: newUser,
      token: generateAuthToken(newUser._id),
    };
    res.send(bodyRes);
  }
};

const validateUsername = async (req, res, next) => {
  const usernameAvailable = await validateUsernameService(req.body.username);

  if (usernameAvailable) {
    res.sendStatus(200);
  } else {
    res.sendStatus(204);
  }
};

module.exports = { register, validateUsername };
