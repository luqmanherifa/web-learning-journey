const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const employeeRoutes = require("./routes/employee.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(employeeRoutes);

module.exports = app;
