const path = require('path'); 
const express = require('express');
const router = express.Router();
const UsersController = require(path.join(__dirname, '..', 'controllers', 'UsersController'));

router.post('/register', UsersController.register);
module.exports = router;