const getParamsUsername = (req, res, next, username) => {
  req.username = username;
  next();
};

const getParamsPostId = (req, res, next, postId) => {
  req.postId = postId;
  next();
};

module.exports = { getParamsUsername, getParamsPostId };
