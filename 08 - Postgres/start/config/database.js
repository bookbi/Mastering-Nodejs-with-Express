// config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'mastering-nodejs-with-express',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || '262005',
  {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 5432),
    dialect: 'postgres',
  }
);

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

async function sync() {
  try {
    await sequelize.sync();
    console.log('Connection synced successfully');
  } catch (error) {
    console.error('Unable to sync to the database:', error);
  }
}

module.exports = { sequelize, connect, sync };
