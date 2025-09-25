const init = require("../models/init-models");
const { Sequelize } = require("sequelize");
const path = require("path");
const mysql2 = require("mysql2/promise");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: "mysql",
});

(async () => {
  try {
    const db = mysql2.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
    });

    await db.query("CREATE DATABASE IF NOT EXISTS " + process.env.DB_NAME);

    init(sequelize);

    await sequelize.sync({ alter: true });
    console.log("Database synced.");
  } catch (error) {
    console.log("Error syncing database.", error);
  }
})();

module.exports = sequelize;
