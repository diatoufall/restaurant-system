const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

// POST doit être en minuscules
router.post('/register', UsersController.register);

module.exports = router;