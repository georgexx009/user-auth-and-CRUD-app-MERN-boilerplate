const UserModel = require('../database/models/user.model');

const registerNewUserService = async newUserData => {
  // verify provided user data
  if (!newUserData) {
    throw new Error('new user information missing');
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
  console.log(username);
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

module.exports = { registerNewUserService, validateUsernameService };
