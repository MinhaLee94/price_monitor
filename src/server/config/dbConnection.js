const { Sequelize } = require("sequelize");
const dbConfig = require("./dbConfig").test;

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    dialectOptions: {
      options: {
        encrypt: false,
      },
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
