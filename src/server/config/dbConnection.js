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

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database: ", err);
  });

db.sellThruVendor = require("../models/sellThruVendor")(sequelize, Sequelize);

module.exports = db;
