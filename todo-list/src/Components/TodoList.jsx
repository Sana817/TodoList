import React, { useState } from "react";
import "../Styles/TodoStyle.css";
import TodoItem from "./TodoItem";

import { taskController, useHookState } from "../Controller/TodoStates";

function TodoList() {
  const [item, setItem] = useState({
    id: "",
    item: "",
    editing: false,
  }); // single item

  console.log(taskController.getTasks);
  const onChange = (event) => {
    console.log("target value on change: " + event.target.value);
    setItem({ ...item, item: event.target.value });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && item.item !== "") {
      taskController.addTask(item); // Add the task using taskController
      setItem({
        id: "", // Don't set id here, it will be set in addTask
        item: "",
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
          name="item"
          value={item.item}
          id="item"
          placeholder="Input task name and then tab enter to add"
          onKeyDown={handleKeyDown}
          onChange={onChange}
        />

        <hr />
        <ul>
          {taskController.getTasks.length > 0 &&
            taskController.getTasks.map((list) => (
              <TodoItem key={list.id} item={list}></TodoItem>
            ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
