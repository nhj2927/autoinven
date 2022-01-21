'use strict';
const { Model, fn } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ItemState.hasMany(models.Item, {
        foreignKey: 'i_state_id',
      });
      models.ItemState.hasMany(models.ItemTimestamp, {
        foreignKey: 'i_state_id',
      });
    }
  }
  ItemState.init(
    {
      i_state_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name_ko: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name_en: {
        allowNull: false,
        type: DataTypes.STRING,
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
      modelName: 'ItemState',
    }
  );
  return ItemState;
};
