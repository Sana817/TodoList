import React, { useState, useEffect } from "react";
import "../Styles/TodoStyle.css";
import TodoItem from "./TodoItem";
const {
  addTask,
  getAllTasks,
  updateTask,
  removeTask,
} = require("../Controller/TodoController");

function TodoList() {
  const [item, setItem] = useState({
    task: "",
    editing: false,
  }); // single item

  const [tasks, setTasks] = useState([]); // State to store tasks

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const fetchAllTasks = async () => {
    try {
      const tasks = await getAllTasks();
      setTasks(tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleRemove = async (taskId) => {
    try {
      await removeTask(taskId);
      await fetchAllTasks();
    } catch (error) {
      console.error("Error removing task:", error);
    }
  };
  const handleUpdate = async (newTask) => {
    try {
      await updateTask(newTask);
      await fetchAllTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  const onChange = (event) => {
    console.log("target value on change: " + event.target.value);
    setItem({ ...item, task: event.target.value });
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && item.task !== "") {
      await addTask(item);
      await fetchAllTasks();
      setItem({
        task: "",
        editing: false,
      });
    }
  };

  return (
    <>
      <div className="container inner">
        <h1>My Todo</h1>
        <input
          className="addItems"
          type="text"
          name="task"
          value={item.task}
          id="item"
          placeholder="Input task name and then tab enter to add"
          onKeyDown={handleKeyDown}
          onChange={onChange}
        />

        <hr />
        <ul>
          {tasks.map((list) => (
            <TodoItem
              key={list._id}
              item={list}
              updateTask={handleUpdate}
              removeTask={handleRemove}
            ></TodoItem>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
