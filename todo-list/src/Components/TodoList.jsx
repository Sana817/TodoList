import React, { useState } from "react";
import "../Styles/TodoStyle.css";
import TodoItem from "./TodoItem";
import { nanoid } from "nanoid";
// import { useDispatch, useSelector } from "react-redux";
// import { addTask } from "../Actions/index";
import { useTaskState } from "../States/TodoStates";

function TodoList() {
  // const myState = useSelector((state) => state.changeTasks); // to get the state from store use useSelector
  // const dispatch = useDispatch(); // to trigger actions

  const taskState = useTaskState();
  const state = taskState.getTasks;
  const [item, setItem] = useState({
    id: "",
    item: "",
    editing: false,
  }); // single item

  const onChange = (event) => {
    console.log("target value on chnage: " + event.target.value);
    setItem({ ...item, id: nanoid(), item: event.target.value });
  };

  const handleKeyDown = (event) => {
    console.log("on adding the item  " + item.item);
    console.log("values from state: " + state.getTasks);
    if (event.key === "Enter") {
      if (item.item !== "") {
        // dispatch(addTask(item));
        taskState.addTask(item);
      }
    }
    setItem({
      id: "",
      item: "",
      editing: false,
    });
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
          {state.length > 0 &&
            state.map((list) => (
              <TodoItem key={list.id} item={list}></TodoItem>
            ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
