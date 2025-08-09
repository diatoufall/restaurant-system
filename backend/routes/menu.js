const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const MenusController = require('../controllers/MenusController');

router.post('/', auth, MenusController.create);
router.get('/', MenusController.getAll);

module.exports = router;