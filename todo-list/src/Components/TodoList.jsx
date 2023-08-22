import React, { useState } from "react";
import "../Styles/TodoStyle.css";
import TodoItem from "./TodoItem";

import { taskHandler, useTaskState } from "../Controller/TodoStates";

function TodoList() {
  const controller = taskHandler(useTaskState());
  const [item, setItem] = useState({
    id: "",
    item: "",
    editing: false,
  }); // single item

  console.log(controller.getTasks);
  const onChange = (event) => {
    console.log("target value on change: " + event.target.value);
    setItem({ ...item, item: event.target.value });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && item.item !== "") {
      controller.addTask(item);
      setItem({
        id: "",
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
          {controller.getTasks.length > 0 &&
            controller.getTasks.map((list) => (
              <TodoItem key={list.id} item={list}></TodoItem>
            ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
