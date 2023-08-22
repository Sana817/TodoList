import React from "react";
import "../Styles/TodoStyle.css";
// import { useDispatch } from "react-redux";
// import { updateTask, editTask, deleteTask } from "../Actions/index";
import { useTaskState } from "../States/TodoStates";
function TodoItem(props) {
  // const dispatch = useDispatch(); // to trigger actions
  const taskState = useTaskState();
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
              // dispatch(updateTask(props.item.id, e.target.value));
              taskState.updateTask(props.item.id, e.target.value);
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
        // onClick={() => dispatch(editTask(props.item.id))} // edit item icon
        onClick={() => taskState.editTask(props.item.id)}
      ></i>
      <i
        className="fa fa-trash del"
        aria-hidden="true"
        // onClick={() => dispatch(deleteTask(props.item.id))} // delete item icon
        onClick={() => {
          taskState.removeTask(props.item.id);
        }}
      ></i>
    </li>
  );
}

export default TodoItem;
