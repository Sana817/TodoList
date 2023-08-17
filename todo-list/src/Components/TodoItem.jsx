import React from "react";
import "../Styles/TodoStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, editTask, deleteTask } from "../Actions/index";
function TodoItem(props) {
  const dispatch = useDispatch(); // to trigger actions
  return (
    <li>
      {props.item.editing ? (
        <input
          type="text"
          defaultValue={props.item.item}
          name="item"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(updateTask(props.item.id, e.target.value));
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

      {/* <span> id {props.item.id}</span> */}
      <i
        className="fa fa-pencil-square-o edit"
        aria-hidden="true"
        onClick={() => dispatch(editTask(props.item.id))} // edit item icon
      ></i>
      <i
        className="fa fa-trash del"
        aria-hidden="true"
        onClick={() => dispatch(deleteTask(props.item.id))} // delete item icon
      ></i>
    </li>
  );
}

export default TodoItem;
