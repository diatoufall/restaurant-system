module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Review', {
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    },
    comment: DataTypes.TEXT,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};