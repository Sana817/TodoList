import React from "react";
import "../Styles/TodoStyle.css";

function TodoItem(props) {
  return (
    <li>
      {props.item.editing ? (
        <input
          type="text"
          defaultValue={props.item.item}
          name="item"
          // onChange={(e) => {
          //   // props.updateItem(props.item.id, e.target.value);
          //   console.log("new value " + e.target.value);
          // }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.updateItem(props.item, e.target.value);
            }
          }}
        />
      ) : (
        <>
          <input
            type="checkbox"
            defaultChecked={props.item.editing || false}
            id="checkboxInput"
          />
          <span>{props.item.item}</span>
        </>
      )}

      {/* <span> id {props.item.id}</span> */}
      <i
        className="fa fa-pencil-square-o edit"
        aria-hidden="true"
        onClick={() => props.editItem(props.item)} // edit item icon
      ></i>
      <i
        className="fa fa-trash del"
        aria-hidden="true"
        onClick={() => props.deleteItem(props.item)} // delete item icon
      ></i>
    </li>
  );
}

export default TodoItem;
