import React from "react";
import "../Styles/TodoStyle.css";

import { taskController } from "../Controller/TodoStates";
function TodoItem(props) {
  console.log(
    "in todo item the item is :" + props.item.id + " " + props.item.item
  );
  return (
    <li>
      {props.item.editing ? (
        <input
          type="text"
          defaultValue={props.item.item}
          name="item"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              taskController.updateTask(props.item.id, e.target.value);
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
        onClick={() => taskController.editTask(props.item.id)}
      ></i>
      <i
        className="fa fa-trash del"
        aria-hidden="true"
        onClick={() => {
          taskController.removeTask(props.item.id);
        }}
      ></i>
    </li>
  );
}

export default TodoItem;
