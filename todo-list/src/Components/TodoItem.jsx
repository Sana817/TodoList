import React from "react";
import "../Styles/TodoStyle.css";

function TodoItem(props) {
  return (
    <li>
      {props.item.editing ? (
        <input
          type="text"
          defaultValue={props.item.task}
          name="item"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.updateTask({
                ...props.item,
                task: e.target.value,
                editing: !props.item.editing,
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
          <span>{props.item.task}</span>
        </>
      )}

      <i
        className="fa fa-pencil-square-o edit"
        aria-hidden="true"
        onClick={() =>
          props.updateTask({ ...props.item, editing: !props.item.editing })
        }
      ></i>
      <i
        className="fa fa-trash del"
        aria-hidden="true"
        onClick={() => {
          props.removeTask(props.item._id);
        }}
      ></i>
    </li>
  );
}

export default TodoItem;
