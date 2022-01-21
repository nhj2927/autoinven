'use strict';
const { Model, fn } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemTimestamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ItemTimestamp.belongsTo(models.Item, {
        foreignKey: 'item_id',
      });
      models.ItemTimestamp.belongsTo(models.ItemState, {
        foreignKey: 'i_state_id',
      });
    }
  }
  ItemTimestamp.init(
    {
      i_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      item_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      i_state_id: {
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
      modelName: 'ItemTimestamp',
    }
  );
  return ItemTimestamp;
};
