const todoListModel = require("../Models/TodoListModel");

// Controller 1 :get all tasks
const getAllTasks = async (req, res) => {
  try {
    const result = await todoListModel.find({});
    // console.log("all tasks " + result);
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: "The products cannot get from db." });
  }
};

// Controller 2: add new task
const addTask = async (req, res) => {
  const { task, editing } = req.body;
  console.log("Adding task:", task, editing);
  try {
    const newTask = new todoListModel({ task, editing });
    const result = await newTask.save();
    console.log("Added new task:", result);
    if (result) res.json(result);
  } catch (error) {
    // console.error("Error adding task:", error);
    res.status(500).send({ error: "Could not add task." });
  }
};

// Controller 3:remove a task
const removeTask = async (req, res) => {
  const id = req.params.id;
  console.log("id to be deleted " + id);
  try {
    const result = await todoListModel.findByIdAndDelete(id);
    console.log("result after deleteing" + result);
    if (result) res.json(result);
  } catch (error) {
    res.status(500).send({ error: "Task could not be deleted" });
  }
};

// Controller 4: update a Task
const updateTask = async (req, res) => {
  const { task, editing } = req.body;
  console.log("Updating task:", task, editing);
  try {
    const result = await todoListModel.findByIdAndUpdate(
      req.params.id,
      { task, editing },
      { new: true }
    );
    console.log("Result after updating:", result);
    if (result) res.json(result);
  } catch (error) {
    // console.error("Error updating task:", error);
    res.status(500).send({ error: "Could not update task." });
  }
};

module.exports = { getAllTasks, addTask, updateTask, removeTask };
