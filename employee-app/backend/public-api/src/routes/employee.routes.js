const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee.controller");
const verifyToken = require("../middlewares/auth.middleware");

router.get("/api_fe/list_employee", verifyToken, employeeController.list);

module.exports = router;
