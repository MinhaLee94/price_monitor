require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const { sequelize, sellThruVendor } = require("./config/dbConnection");
const PORT = process.env.PORT || 4000;
const dbConfig = require("./config/dbConfig").test;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

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

app.post("/api/data", (req, res) => {
  const requestData = req.body;
  res.json({ message: "Data received successfully!", data: requestData });
});

app.listen(PORT, () => {
  console.log(`Server On: http://localhost:${PORT}/`);
});
