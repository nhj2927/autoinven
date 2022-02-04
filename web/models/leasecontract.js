'use strict';
const { Model, fn } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaseContract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.LeaseContract.belongsTo(models.ContractState, {
        foreignKey: 'c_state_id',
      });
      models.LeaseContract.belongsTo(models.Warehouse, {
        foreignKey: 'warehouse_id',
      });
      models.LeaseContract.hasOne(models.Payment, {
        foreignKey: 'l_contract_id',
      });
      models.LeaseContract.hasMany(models.ContractTimestamp, {
        foreignKey: 'l_contract_id',
      });
      models.LeaseContract.hasMany(models.Item, {
        foreignKey: 'l_contract_id',
      });
    }
  }
  LeaseContract.init(
    {
      l_contract_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      c_state_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      warehouse_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      user_email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lease_area: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      start_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      end_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      purpose: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      note: {
        allowNull: false,
        type: DataTypes.TEXT,
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
      modelName: 'LeaseContract',
    }
  );
  return LeaseContract;
};
