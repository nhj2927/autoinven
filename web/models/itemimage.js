'use strict';
const { Model, fn } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ItemImage.belongsTo(models.Item, {
        foreignKey: 'item_id',
      });
    }
  }
  ItemImage.init(
    {
      url: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      item_id: {
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
      modelName: 'ItemImage',
    }
  );
  return ItemImage;
};
