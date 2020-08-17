const bcrypt = require('bcryptjs');
const UserModel = require('../database/models/user.model');

const registerNewUserService = async newUserData => {
  // verify provided user data
  if (!newUserData) {
    throw new Error('new user data missing');
  }
  let newUserDoc;
  try {
    // create new document from new user
    newUserDoc = await UserModel.create(newUserData);
  } catch (err) {
    console.log('An error ocurred while registering user:');
    console.log(err.message);
    return null;
  }
  return newUserData;
};

const validateUsernameService = async username => {
  let usernameDoc;
  try {
    usernameDoc = await UserModel.findOne({ username });
  } catch (err) {
    console.log('An error ocurred while searching username');
    console.log(err.message);
    return null;
  }
  console.log(usernameDoc);
  if (usernameDoc) {
    return false;
  } else {
    return true;
  }
};

const loginUserService = async userData => {
  // verify provided user data
  if (!userData) {
    throw new Error('user data missing');
  }
  let userDoc;
  try {
    userDoc = await UserModel.findOne({ username: userData.username });
  } catch (err) {
    console.log('An error ocurred while logging user:');
    console.log(err.message);
    return null;
  }
  return userDoc;
};

const validateUserPassword = async (returnedPassword, reqPassword) => {
  return await bcrypt.compare(reqPassword, returnedPassword);
};

module.exports = {
  registerNewUserService,
  validateUsernameService,
  loginUserService,
  validateUserPassword,
};
