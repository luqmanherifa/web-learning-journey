const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("./config/sequelize");
const Todo = require("./models/todo");
const todoRoutes = require("./routes/todos");

require("dotenv").config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("To-Do List API here.");
});

app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  console.log("Database synced.");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
