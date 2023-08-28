import React, { useState, useEffect } from "react";
import "../Styles/TodoStyle.css";
import TodoItem from "./TodoItem";
import { taskHandler, useTaskState } from "../Controller/TodoListController";

function TodoList() {
  const controller = taskHandler(useTaskState());

  const [item, setItem] = useState({
    task: "",
    editing: false,
  });

  const [tasks, setTasks] = useState([]);

  // fetch all tasks
  const fetchTasks = async () => {
    const fetchedTasks = await controller.getTasks();
    setTasks(fetchedTasks);
    console.log("tasks from front end ", fetchedTasks);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const handleRemove = async (taskId) => {
    try {
      await controller.removeTask(taskId);
      fetchTasks();
    } catch (error) {
      console.error("Error removing task:", error);
    }
  };

  const handleUpdate = async (newTask) => {
    try {
      await controller.updateTask(newTask);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && item.task.trim() !== "") {
      const taskExists = tasks.some((task) => task.task === item.task);
      if (taskExists) {
        alert("Task already exists in todo list");
      } else {
        await controller.addTask(item);

        setItem({
          task: "",
          editing: false,
        });
      }
      fetchTasks();
    }
  };

  const onChange = (event) => {
    console.log("target value on change: " + event.target.value);

    setItem({ ...item, task: event.target.value });
  };

  return (
    <>
      <div className="outer">
        <div className="container inner ">
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
      </div>
    </>
  );
}

export default TodoList;
