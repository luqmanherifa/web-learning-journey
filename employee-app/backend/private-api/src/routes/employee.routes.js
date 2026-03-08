const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee.controller");

router.get("/api_fe/list_employee", employeeController.list);

module.exports = router;
