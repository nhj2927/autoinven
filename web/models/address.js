'use strict';
const { Model, fn } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Address.hasMany(models.Warehouse, {
        foreignKey: 'address1_ko',
      });
    }
  }
  Address.init(
    {
      address: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      latitude: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      longitude: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      zip_code: {
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
      modelName: 'Address',
    }
  );
  return Address;
};
