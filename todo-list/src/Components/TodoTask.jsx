import React from "react";
import "../Styles/TodoStyle.css";

function TodoTask(props) {
  return (
    <li>
      {props.task.editing ? (
        <input
          type="text"
          defaultValue={props.task.name}
          name="name"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.updateTask(props.task, e.target.value);
            }
          }}
        />
      ) : (
        <>
          <input
            type="checkbox"
            defaultChecked={props.task.editing || false}
            id="checkboxInput"
          />
          <span>{props.task.name}</span>
        </>
      )}

      <i
        className="fa fa-pencil-square-o edit"
        aria-hidden="true"
        onClick={() => props.editTask(props.task)}
      ></i>
      <i
        className="fa fa-trash del"
        aria-hidden="true"
        onClick={() => props.deleteTask(props.task)}
      ></i>
    </li>
  );
}

export default TodoTask;
