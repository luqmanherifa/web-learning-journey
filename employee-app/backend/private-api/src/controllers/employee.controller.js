const employeeService = require("../services/employee.service");

class EmployeeController {
  async list(req, res) {
    try {
      const data = await employeeService.getHierarchy();
      res.json({
        success: true,
        data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}

module.exports = new EmployeeController();
