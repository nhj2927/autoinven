'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IotDevice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IotDevice.init(
    {
      device_id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      warehouse_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'IotDevice',
    }
  );
  return IotDevice;
};