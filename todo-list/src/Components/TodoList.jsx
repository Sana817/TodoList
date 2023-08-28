import React, { useState } from "react";
import "../Styles/TodoStyle.css";
import TodoTask from "./TodoTask";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Actions/TodoTaskActions";

function TodoList() {
  const initialTodoTask = {
    id: "",
    name: "",
    editing: false,
  };
  const [task, setTask] = useState(initialTodoTask);
  const todoListState = useSelector((state) => state.todoTaskReducer);
  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (task.name !== "") {
        dispatch(addTask(task));
      }
    }
    setTask(initialTodoTask);
  };
  const onChange = (event) => {
    setTask({ ...task, id: nanoid(), name: event.target.value });
  };
  return (
    <>
      <div className="container inner">
        <h1>My Todo</h1>
        <input
          className="addtasks"
          type="text"
          name="name"
          value={task.name}
          id="name"
          placeholder="Input task name and then tab enter to add"
          onKeyDown={handleKeyDown}
          onChange={onChange}
        />

        <hr />
        <ul>
          {todoListState.map((list) => (
            <TodoTask key={list.id} task={list}></TodoTask>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
