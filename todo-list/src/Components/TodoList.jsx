import React, { useState } from "react";
import "../Styles/TodoStyle.css";
import TodoTask from "./TodoTask";
import { nanoid } from "nanoid";

function TodoList() {
  const initialTodoList = [];
  const [todoList, setTodoList] = useState(initialTodoList);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task !== "") {
      const newTodoList = todoList.concat({
        id: nanoid(),
        name: task,
        editing: false,
      });

      setTodoList(newTodoList);
    }

    setTask("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const deleteTask = (element) => {
    const updatedTodoList = todoList.filter((task) => task.id !== element.id);
    setTodoList(updatedTodoList);
  };

  const editTask = (element) => {
    const updatedTodoList = todoList.map((task) => {
      if (task.id === element.id) {
        return { ...task, editing: !task.editing };
      }
      return task;
    });
    setTodoList(updatedTodoList);
  };

  const updateTask = (element, updatedTask) => {
    const updatedTodoList = todoList.map((task) => {
      if (task.id === element.id) {
        return { ...task, name: updatedTask, editing: false };
      }
      return task;
    });
    setTodoList(updatedTodoList);
  };
  const onChange = (event) => {
    setTask(event.target.value);
  };
  return (
    <>
      <div className="container inner">
        <h1>My Todo</h1>
        <input
          className="addtasks"
          type="text"
          name="task"
          value={task}
          id="task"
          placeholder="Input task name and then tab enter to add"
          onKeyDown={handleKeyDown}
          onChange={onChange}
        />

        <hr />
        <ul>
          {todoList.map((task) => (
            <TodoTask
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
              updateTask={updateTask}
            ></TodoTask>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
