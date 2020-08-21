// function helper for make the response object
const makeResponse = require('./utils/makeResponse');
const userController = require('../../controllers/user.controller');

module.exports = async (req, res) => {
  let newUserDoc = await userController.create(req.body);

  // handle error
  if (newUserDoc === null) {
    res.status(400).send('an error ocurred while creating new user');
  } // ----------------------------------------
  else {
    const bodyRes = makeResponse(newUserDoc);
    res.send(bodyRes);
  }
};
