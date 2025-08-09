const { sequelize } = require('../config/database');
const { DataTypes } = require('sequelize');

const User = require('./User')(sequelize, DataTypes);
const Menu = require('./Menu')(sequelize, DataTypes);
const Order = require('./Order')(sequelize, DataTypes);
const Review = require('./Review')(sequelize, DataTypes);

// Relations
User.hasMany(Menu);
Menu.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

Menu.hasMany(Review);
Review.belongsTo(Menu);

Menu.hasMany(Order);
Order.belongsTo(Menu);

module.exports = {
  sequelize,
  User,
  Menu,
  Order,
  Review
};