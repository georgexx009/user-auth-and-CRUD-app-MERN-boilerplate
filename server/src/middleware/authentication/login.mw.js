const userController = require('../../controllers/user.controller');
const makeResponse = require('./utils/makeResponse');
const validateUserPassword = require('./utils/validateUserPassword');

module.exports = async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await userController.findByUsername(username);

  // handle error
  if (userDoc === null) {
    res.status(400).send('error trying to find user');
  } else if (!userDoc) {
    res.status(404).send('no user found');
  } // ----------------------------------------
  else {
    // validate password from database with the one from request
    const correctPassword = await validateUserPassword(
      userDoc.password,
      password
    );

    if (correctPassword) {
      const bodyRes = makeResponse(userDoc);
      res.status(200).send(bodyRes);
    } else {
      res.status(401).send('Incorrect Password');
    }
  }
};
