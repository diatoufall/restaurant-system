module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Order', {
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    },
    total: DataTypes.FLOAT,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};