const employeeRepository = require("../repositories/employee.repository");

class EmployeeService {
  async getHierarchy() {
    return await employeeRepository.getHierarchy();
  }
}

module.exports = new EmployeeService();
