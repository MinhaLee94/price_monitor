require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/dbConnection").sequelize;
const dbConfig = require("./config/dbConfig").test;

app.get("/", (req, res) => {
  res.send(dbConfig.host);
});

app.listen(PORT, () => {
  console.log(`Server On: http://localhost:${PORT}/`);
});

(async function () {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
