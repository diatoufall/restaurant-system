const { Review } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const review = await Review.create({
        ...req.body,
        userId: req.user.id
      });
      res.status(201).json(review);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};