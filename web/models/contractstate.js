'use strict';
const { Model, fn } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContractState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ContractState.hasMany(models.LeaseContract, {
        foreignKey: 'c_state_id',
      });
      models.ContractState.hasMany(models.ContractTimestamp, {
        foreignKey: 'c_state_id',
      });
    }
  }
  ContractState.init(
    {
      c_state_id: {
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
      modelName: 'ContractState',
    }
  );
  return ContractState;
};
