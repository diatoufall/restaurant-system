const { Order, Menu } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const order = await Order.create({
        ...req.body,
        userId: req.user.id
      });
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};