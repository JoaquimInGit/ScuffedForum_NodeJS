
const postController = require("../controllers/post-controller.js")
const router = require('express').Router();

const auth = require("../configs/authorization");
const roles = require('../helpers/roles.js');

router.get('', auth(roles.Boss, roles.Servant), postController.getPosts);
router.get('/:id', auth(roles.Boss, roles.Servant), postController.getPost);
router.post('', auth(roles.Boss, roles.Servant), postController.insertPost);
router.put('/:id', auth(roles.Boss, roles.Servant), postController.updatePost);
router.delete('/:id', auth(roles.Boss, roles.Servant), postController.removePost);

router.post('/comment/:id', auth(roles.Boss, roles.Servant), postController.insertComment);
router.delete('/comment/:id', auth(roles.Boss, roles.Servant), postController.removeComment);

module.exports = router;
