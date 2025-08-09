const { sequelize } = require('../config/database');
const { DataTypes } = require('sequelize');

// Chargement du seul modèle disponible
const User = require('./User')(sequelize, DataTypes);

// Export (sans relations car seul le modèle User existe)
module.exports = {
  sequelize,
  User
};