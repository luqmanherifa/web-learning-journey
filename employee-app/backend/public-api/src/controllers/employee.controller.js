const api = require("../config/axios");

class EmployeeController {
  async list(req, res) {
    try {
      const response = await api.get("/api_fe/list_employee");

      return res.json({
        success: true,
        data: response.data.data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch from private API",
      });
    }
  }
}

module.exports = new EmployeeController();
