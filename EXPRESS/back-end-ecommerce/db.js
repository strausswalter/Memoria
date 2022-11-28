//https://sequelize.org/docs/v6/getting-started/
const Sequelize = require('sequelize');
// import dotenv from "dotenv/config.js";

const dbName = 'teste'
const dbUser = 'root';
const dbHost = 'localhost';
const dbPassword = 'S$&nhaFortte736';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports = sequelize;

