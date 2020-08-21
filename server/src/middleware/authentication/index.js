/*
  the mw functions structure
  wait for the controller to fetch the data from database
  delete the password from user object, to not return it back
  add the token to the answer
  with this token, the user could make operations that required authentication
*/

module.exports = {
  register: require('./register.mw'),
  validateUsername: require('./validateUsername.mw'),
  login: require('./login.mw'),
};
