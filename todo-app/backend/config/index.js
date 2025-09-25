const mysql2 = require("mysql2/promise");

class DBConnection {
  constructor() {
    this.db = mysql2.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      supportBigNumbers: true,
      bigNumberStrings: true,
      dateStrings: true,
    });

    this.checkConnection();
  }

  async checkConnection() {
    try {
      await this.db.query("SELECT 1+1");
      console.log(`  DB ${process.env.DB_NAME} Connected.`);
    } catch (error) {
      switch (error.code) {
        case "PROTOCOL_CONNECTION_LOST":
          console.error(`Database ${process.env.DB_NAME} connection was closed.`);
          break;
        case "ER_CON_COUNT_ERROR":
          console.error(`Database ${process.env.DB_NAME} has too many connections.`);
          break;
        case "ECONNREFUSED":
          console.error(`Database ${process.env.DB_NAME} connection was refused.`);
          break;
        default:
          console.error(error.code);
          break;
      }
    }
    return 1;
  }
}

const conn = new DBConnection();
exports.connection = conn.db;
