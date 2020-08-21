const postController = require('../../controllers/post.controller');

module.exports = async (req, res) => {
  const allPosts = await postController.getAll();
  if (allPosts === null) {
    res.status(400).send('Error ocurred while getting all posts');
  } else {
    res.send(allPosts);
  }
};
