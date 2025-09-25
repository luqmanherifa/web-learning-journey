const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (id < 0) return res.status(400).json({ message: "Invalid ID." });

  try {
    const todo = await Todo.findByPk(id);
    if (!todo) return res.status(404).json({ message: "ToDo not found." });

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { title, description, status } = req.body;
  console.log("Request Body: ", req.body);
  if (!title) return res.status(400).json({ message: "Title is required." });

  try {
    const todo = await Todo.create({ title, description, status });
    res.status(201).json(todo);
  } catch (error) {
    console.error("Error creating ToDo: ", error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) return res.status(404).json({ message: "ToDo not found." });

    todo.title = title !== undefined ? title : todo.title;
    todo.description =
      description !== undefined ? description : todo.description;
    todo.status = status !== undefined ? status : todo.status;
    await todo.save();

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) return res.status(404).json({ message: "ToDo not found." });

    await todo.destroy();
    res.json({ message: "ToDo deleted." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
