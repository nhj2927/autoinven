'use strict';
const { Model, fn } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Item.belongsTo(models.LeaseContract, {
        foreignKey: 'l_contract_id',
      });
      models.Item.belongsTo(models.User, {
        foreignKey: 'user_email',
      });
      models.Item.hasMany(models.ItemImage, {
        foreignKey: 'item_id',
      });
      models.Item.hasMany(models.ItemTimestamp, {
        foreignKey: 'item_id',
      });
      models.Item.belongsTo(models.ItemState, {
        foreignKey: 'i_state_id',
      });
    }
  }
  Item.init(
    {
      item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      l_contract_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      i_state_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      qrcode: {
        type: DataTypes.STRING,
      },
      note: DataTypes.TEXT,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: fn('now'),
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
      modelName: 'Item',
    }
  );
  return Item;
};
