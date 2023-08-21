import React, { useState, useEffect } from "react";
import "../Styles/TodoStyle.css";
import TodoItem from "./TodoItem";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Actions/index";

function TodoList() {
  const myState = useSelector((state) => state.changeTasks); // to get the state from store use useSelector
  const dispatch = useDispatch(); // to trigger actions

  const [item, setItem] = useState({
    id: "",
    item: "",
    editing: false,
  }); // single item

  const onChange = (event) => {
    setItem({ ...item, id: nanoid(), item: event.target.value });
  };

  const handleKeyDown = (event) => {
    console.log("on adding the item  " + item.item);
    if (event.key === "Enter") {
      if (item.item !== "") {
        dispatch(addTask(item));
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
          {myState.map((list) => (
            <TodoItem key={list.id} item={list}></TodoItem>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
