const mongoose = require("mongoose");

const todoListSchema = new mongoose.Schema({
  task: String,
  editing: { type: Boolean, default: false },
});

module.exports = mongoose.model("TodoList", todoListSchema);
