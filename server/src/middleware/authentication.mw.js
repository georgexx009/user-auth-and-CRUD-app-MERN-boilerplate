const {
  registerNewUserService,
  validateUsernameService,
  loginUserService,
  validateUserPassword,
} = require('../services/authentication.service');
const generateAuthToken = require('../utils/generateAuthToken');

const register = async (req, res, next) => {
  const newUser = await registerNewUserService(req.body);
  if (!newUser) {
    res.sendStatus(400);
  } else {
    delete newUser.password;
    const bodyRes = {
      user: newUser,
      token: generateAuthToken(newUser._id),
    };
    console.log(bodyRes);
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

const login = async (req, res, next) => {
  const user = await loginUserService(req.body);

  if (!user) {
    res.sendStatus(404);
  } else {
    // validate password from database with the one from request
    const correctPassword = await validateUserPassword(
      user.password,
      req.body.password
    );
    if (correctPassword) {
      // remove password to not return it
      delete user.password;
      const bodyRes = {
        user,
        token: generateAuthToken(user._id),
      };
      res.status(200).send(bodyRes);
    } else {
      res.status(204).send('Failed to find user');
    }
  }
};

module.exports = { register, validateUsername, login };
