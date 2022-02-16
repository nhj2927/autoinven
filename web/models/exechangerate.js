'use strict';
const { Model, fn } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExchangeRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExchangeRate.init(
    {
      cur_unit: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      deal_bas_r: {
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
      modelName: 'ExchangeRate',
    }
  );
  return ExchangeRate;
};
