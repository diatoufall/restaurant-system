const { Menu } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const menu = await Menu.create({
        ...req.body,
        userId: req.user.id
      });
      res.status(201).json(menu);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const menus = await Menu.findAll();
      res.json(menus);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};