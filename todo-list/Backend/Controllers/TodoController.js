const todoListModel = require("../Models/TodoListModel");

const getAllTasks = async (req, res) => {
  try {
    const result = await todoListModel.find({});
    res.json(result);
  } catch (error) {
    res.status(500).send({ error: "Tasks could not be fetched." });
  }
};

const addTask = async (req, res) => {
  const { task, editing } = req.body;
  try {
    const newTask = new todoListModel({ task, editing });
    const result = await newTask.save();
    if (result) res.json(result);
  } catch (error) {
    res.status(500).send({ error: "New Task could not be added." });
  }
};

const removeTask = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await todoListModel.findByIdAndDelete(id);
    if (result) res.json(result);
  } catch (error) {
    res.status(500).send({ error: "Task could not be deleted" });
  }
};

const updateTask = async (req, res) => {
  const { task, editing } = req.body;
  try {
    const result = await todoListModel.findByIdAndUpdate(
      req.params.id,
      { task, editing },
      { new: true }
    );
    if (result) res.json(result);
  } catch (error) {
    res.status(500).send({ error: "Task could not be updated." });
  }
};

module.exports = { getAllTasks, addTask, updateTask, removeTask };
