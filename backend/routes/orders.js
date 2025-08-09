const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const OrdersController = require('../controllers/OrdersController');

router.post('/', auth, OrdersController.create);

module.exports = router;