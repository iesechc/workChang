const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const Cliente = sequelize.define('Cliente', {
  ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  Usuario_ID: {
    type: Sequelize.INTEGER,
    references: {
      model: Usuario,
      key: 'ID',
    }
  }
}, { timestamps: false, freezeTableName: true });

module.exports = Cliente;