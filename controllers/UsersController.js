const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = {
  async register(req, res) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      });
      
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).json({ 
        error: 'Registration failed',
        details: error.message
      });
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({ 
        where: { email: req.body.email } 
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const validPassword = await bcrypt.compare(
        req.body.password, 
        user.password
      );

      if (!validPassword) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({ user, token });
    } catch (error) {
      res.status(500).json({ 
        error: 'Login failed', 
        details: error.message 
      });
    }
  }
};