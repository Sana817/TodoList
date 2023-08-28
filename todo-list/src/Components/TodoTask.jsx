import React from "react";
import "../Styles/TodoStyle.css";

function TodoItem(props) {
  return (
    <li>
      {props.task.editing ? (
        <input
          type="text"
          defaultValue={props.task.name}
          name="name"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.updateTask({
                ...props.task,
                name: e.target.value,
                editing: !props.task.editing,
              });
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
          <span>{props.task.name}</span>
        </>
      )}

      <i
        className="fa fa-pencil-square-o edit"
        aria-hidden="true"
        onClick={() =>
          props.updateTask({ ...props.task, editing: !props.task.editing })
        }
      ></i>
      <i
        className="fa fa-trash del"
        aria-hidden="true"
        onClick={() => {
          props.removeTask(props.task._id);
        }}
      ></i>
    </li>
  );
}

export default TodoItem;
