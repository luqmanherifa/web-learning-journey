const pool = require("../config/db");

class EmployeeRepository {
  async getHierarchy() {
    const [rows] = await pool.query("CALL sp_get_employee_hierarchy()");
    return rows[0];
  }
}

module.exports = new EmployeeRepository();
