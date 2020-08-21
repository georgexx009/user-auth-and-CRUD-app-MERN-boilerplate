module.exports = (req, res, next, userId) => {
  req.userId = userId;
  next();
};
