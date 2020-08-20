const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const userController = require('../controllers/user.controller');

router.post('/user/create', userController.create);
router.post('/user/find', userController.find);
router.post('user/find/post/:id', userController.postsByUser);

router.post('/post/create/:id', postController.create);
router.get('/post/populate/:id', postController.userByPost);
module.exports = router;
