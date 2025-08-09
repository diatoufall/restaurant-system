const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: console.log, // Active les logs SQL
  define: {
    timestamps: true // Ajoute automatiquement createdAt/updatedAt
  }
});

// Test de connexion
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Connection error:', err));

module.exports = sequelize;