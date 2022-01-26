'use strict';
const { Model, fn } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WarehouseImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.WarehouseImage.belongsTo(models.Warehouse, {
        foreignKey: 'warehouse_id',
      });
    }
  }
  WarehouseImage.init(
    {
      url: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      warehouse_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: fn('now'),
      },
    },
    {
      sequelize,
      modelName: 'WarehouseImage',
    }
  );
  return WarehouseImage;
};
