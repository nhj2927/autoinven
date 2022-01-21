'use strict';
const { Model, fn } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContractTimestamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ContractTimestamp.belongsTo(models.LeaseContract, {
        foreignKey: 'l_contract_id',
      });
      models.ContractTimestamp.belongsTo(models.ContractState, {
        foreignKey: 'c_state_id',
      });
    }
  }
  ContractTimestamp.init(
    {
      c_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      l_contract_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      c_state_id: {
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
      modelName: 'ContractTimestamp',
    }
  );
  return ContractTimestamp;
};
