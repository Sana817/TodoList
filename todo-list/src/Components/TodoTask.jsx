import React from "react";
import "../Styles/TodoStyle.css";
import { taskHandler, useTaskState } from "../Controller/TodoListStates";

function TodoTask(props) {
  const todoListController = taskHandler(useTaskState());

  return (
    <li>
      {props.task.editing ? (
        <input
          type="text"
          defaultValue={props.item.item}
          name="name"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              todoListController.updateTask(props.task.id, e.target.value);
            }
          }}
        />
      ) : (
        <>
          <input
            type="checkbox"
            defaultChecked={props.task.editing}
            id="checkboxInput"
          />
          <span>{props.task.name}</span>
        </>
      )}

      <i
        className="fa fa-pencil-square-o edit"
        aria-hidden="true"
        onClick={() => todoListController.editTask(props.task.id)}
      ></i>
      <i
        className="fa fa-trash del"
        aria-hidden="true"
        onClick={() => {
          todoListController.removeTask(props.task.id);
        }}
      ></i>
    </li>
  );
}

export default TodoTask;
