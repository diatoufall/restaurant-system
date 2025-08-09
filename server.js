require('dotenv').config();
const express = require('express');
const { sequelize } = require('./config/database');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));

// Synchronisation de la base de données
sequelize.sync({ alter: true })
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log('Database synchronized');
    });
  })
  .catch(err => {
    console.error('Database sync error:', err);
  });
app.use('/api/menus', require('./routes/menus'));
app.use('/api/orders', auth, require('./routes/orders'));
app.use('/api/reviews', auth, require('./routes/reviews'));