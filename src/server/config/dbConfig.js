module.exports = {
  prod: {
    username: process.env.REACT_APP_DB_USERNAME,
    password: process.env.REACT_APP_DB_PASSWORD,
    host: process.env.REACT_APP_DB_SERVER,
    database: process.env.REACT_APP_DB_DATABASE_PROD,
    port: process.env.REACT_APP_DB_PORT,
    dialect: "mssql",
  },
  test: {
    username: process.env.REACT_APP_DB_USERNAME,
    password: process.env.REACT_APP_DB_PASSWORD,
    host: process.env.REACT_APP_DB_SERVER,
    database: process.env.REACT_APP_DB_DATABASE_TEST,
    port: process.env.REACT_APP_DB_PORT,
    dialect: "mssql",
  },
};
