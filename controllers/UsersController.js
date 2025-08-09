// controllers/UsersController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database');
const User = db.import('../models/User');

module.exports = {
  async register(req, res) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      });
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) return res.status(404).send('User not found');

      const validPass = await bcrypt.compare(req.body.password, user.password);
      if (!validPass) return res.status(400).send('Invalid password');

      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.send({ token });
    } catch (error) {
      res.status(500).send(error);
    }
  }
};