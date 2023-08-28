import React, { useState } from "react";
import "../Styles/TodoStyle.css";
import TodoTask from "./TodoTask";

import { taskHandler, useTaskState } from "../Controller/TodoListStates";

function TodoList() {
  const initialTaskValues = {
    id: "",
    name: "",
    editing: false,
  };
  const todoListController = taskHandler(useTaskState());
  const [task, setTask] = useState(initialTaskValues);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && task.name !== "") {
      todoListController.addTask(task);
      setTask(initialTaskValues);
    }
  };
  const onChange = (event) => {
    setTask({ ...task, name: event.target.value });
  };
  return (
    <>
      <div className="container inner">
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
          {todoListController.getTasks.length > 0 &&
            todoListController.getTasks.map((task) => (
              <TodoTask key={task.id} task={task}></TodoTask>
            ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
