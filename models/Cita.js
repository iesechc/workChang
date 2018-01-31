const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const sequelize = dbconfig;

const Cita = sequelize.define('Cita', {
  ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  Automovil_ID: {
    type: Sequelize.INTEGER,
    references: {
      model: Automovil,
      key: 'ID',
    }
  }
}, { timestamps: false, freezeTableName: true });

module.exports = Cita;