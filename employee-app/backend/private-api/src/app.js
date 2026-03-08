const express = require("express");
const cors = require("cors");
const employeeRoutes = require("./routes/employee.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(employeeRoutes);

module.exports = app;
