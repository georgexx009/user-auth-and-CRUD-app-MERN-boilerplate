const bcrypt = require('bcryptjs');

// compare password returned from database with
// password from the request
module.exports = async (pswDB, pswReq) => {
  console.log(pswDB);
  return await bcrypt.compare(pswReq, pswDB);
};
