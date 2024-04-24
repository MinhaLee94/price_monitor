require("dotenv").config();

const express = require("express");
const app = express();
const { sequelize, sellThruVendor } = require("./config/dbConnection");
const PORT = process.env.PORT || 4000;
const db = require("./config/dbConnection").sequelize;
const dbConfig = require("./config/dbConfig").test;

sequelize.sync();

app.get("/", (req, res) => {
  res.send(dbConfig.host);
});

app.get("/get/data", (req, res) => {
  sellThruVendor
    .findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      throw err;
    });
});

app.listen(PORT, () => {
  console.log(`Server On: http://localhost:${PORT}/`);
});
