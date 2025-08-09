// models/index.js
const { Sequelize } = require('sequelize');
const path = require('path');

// Configuration unique de Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite'),
  logging: console.log,
  define: {
    timestamps: true
  }
});

// Import des modèles
const User = require('./User')(sequelize, Sequelize.DataTypes);
const Menu = require('./Menu')(sequelize, Sequelize.DataTypes);
const Order = require('./Order')(sequelize, Sequelize.DataTypes);
const Review = require('./Review')(sequelize, Sequelize.DataTypes);

// Définissez les relations
User.hasMany(Menu, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });
User.hasMany(Review, { foreignKey: 'userId' });
Menu.hasMany(Review, { foreignKey: 'menuId' });
Menu.hasMany(Order, { foreignKey: 'menuId' });

module.exports = {
  sequelize,
  User,
  Menu,
  Order,
  Review
};