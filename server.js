require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const { sequelize } = require('./models');

app.use(express.json());

// Import des routes
const userRoutes = require(path.join(__dirname, 'backend', 'routes', 'users'));
app.use('/api/users', userRoutes);

// Test route
app.get('/test', (req, res) => res.send('API Ready'));

// Démarrage
sequelize.sync({ force: true }).then(() => {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Test: http://localhost:3000/test');
    console.log('Register: POST http://localhost:3000/api/users/register');
  });
});