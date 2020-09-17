const catController = require("../controllers/category-controller.js")
const router = require('express').Router();

const auth = require("../configs/authorization");
const roles = require('../helpers/roles.js');

router.get('', auth(roles.Boss, roles.Servant), catController.getCategory);
router.post('', auth(roles.Boss, roles.Servant), catController.insertCategory);
router.delete('/:id', auth(roles.Boss, roles.Servant), catController.removeCategory);

module.exports = router;
