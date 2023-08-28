import React, { useState, useEffect } from "react";
import "../Styles/TodoStyle.css";
import Todotask from "./TodoTask";
const {
  addTask,
  getAllTasks,
  updateTask,
  removeTask,
} = require("../Controller/TodoController");

function TodoList() {
  const [task, setTask] = useState({
    name: "",
    editing: false,
  });

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const fetchAllTasks = async () => {
    try {
      const tasks = await getAllTasks();
      setTodoList(tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleRemoveTask = async (taskId) => {
    try {
      await removeTask(taskId);
      await fetchAllTasks();
    } catch (error) {
      console.error("Error removing task:", error);
    }
  };
  const handleUpdateTask = async (newTask) => {
    try {
      await updateTask(newTask);
      await fetchAllTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  const onChange = (event) => {
    setTask({ ...task, name: event.target.value });
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && task.task !== "") {
      await addTask(task);
      await fetchAllTasks();
      setTask({
        name: "",
        editing: false,
      });
    }
  };

  return (
    <>
      <div className="outer">
        <div className="container inner ">
          <h1>My Todo</h1>
          <input
            className="addtasks"
            type="text"
            name="task"
            value={task.task}
            id="task"
            placeholder="Input task name and then tab enter to add"
            onKeyDown={handleKeyDown}
            onChange={onChange}
          />

          <hr />
          <ul>
            {todoList.map((task) => (
              <Todotask
                key={task._id}
                task={task}
                updateTask={handleUpdateTask}
                removeTask={handleRemoveTask}
              ></Todotask>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
