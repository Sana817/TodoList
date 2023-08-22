import React from "react";
import "../Styles/TodoStyle.css";
import { taskHandler, useTaskState } from "../Controller/TodoStates";
function TodoItem(props) {
  const controller = taskHandler(useTaskState());

  return (
    <li>
      {props.item.editing ? (
        <input
          type="text"
          defaultValue={props.item.item}
          name="item"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              controller.updateTask(props.item.id, e.target.value);
            }
          }}
        />
      ) : (
        <>
          <input
            type="checkbox"
            defaultChecked={props.item.editing}
            id="checkboxInput"
          />
          <span>{props.item.item}</span>
        </>
      )}

      <i
        className="fa fa-pencil-square-o edit"
        aria-hidden="true"
        onClick={() => controller.editTask(props.item.id)}
      ></i>
      <i
        className="fa fa-trash del"
        aria-hidden="true"
        onClick={() => {
          controller.removeTask(props.item.id);
        }}
      ></i>
    </li>
  );
}

export default TodoItem;
