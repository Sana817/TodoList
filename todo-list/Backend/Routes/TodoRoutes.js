const express = require("express");
const router = express.Router();
const todoController = require("../Controllers/TodoController");

router.get("/", todoController.getAllTasks);
router.post("/addTask", todoController.addTask);
router.put("/updateTask/:id", todoController.updateTask);
router.delete("/removeTask/:id", todoController.removeTask);

module.exports = router;
