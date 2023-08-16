import React, { useState } from "react";
import "../Styles/TodoStyle.css";
import TodoItem from "./TodoItem";
import { nanoid } from "nanoid";

function TodoList() {
  const todoList = []; // initial List
  const [list, setList] = useState(todoList); // overall list
  const [item, setItem] = useState(""); // single item

  const onChange = (event) => {
    setItem(event.target.value);
  };

  const handleItem = () => {
    // console.log("item   " + item);
    if (item !== "") {
      const newList = list.concat({ id: nanoid(), item: item, editing: false }); //nnaoid is use to assign random gereated it to each object uniquely
      // for (const key in newList) {
      //   const element = newList[key];
      //   console.log(element);
      // }
      setList(newList);
    }
    // console.log("old list" + list[0]);
    // console.log("new list" + newList);
    setItem("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleItem();
    }
  };

  // delete a particluar item
  const deleteItem = (element) => {
    console.log("element id in delete" + element.id);
    // const index = list.findIndex(function (item) {
    //   return item.id === element.id;
    // });

    // console.log("index of deleteing item " + index);
    // if (index > -1) {
    //   list.splice(index, 1);
    //   for (const key in list) {
    //     const element = list[key];
    //     console.log(element);
    //   }
    // }
    const updatedList = list.filter((item) => item.id !== element.id);
    setList(updatedList);
  };

  // edit a particular item
  const editItem = (element) => {
    const updatedList = list.map((item) => {
      if (item.id === element.id) {
        console.log(
          "eidt function call to check editing b=value" + item.editing
        );
        return { ...item, editing: !item.editing };
      }
      return item;
    });
    setList(updatedList);
  };

  // update item on editing
  const updateItem = (element, updatedItem) => {
    console.log(
      "updatedItem is called " + updatedItem + "    " + element.editing
    );
    const updatedList = list.map((item) => {
      if (item.id === element.id) {
        return { ...item, item: updatedItem, editing: false };
      }
      return item;
    });
    setList(updatedList);
  };

  return (
    <>
      <div className="container inner">
        <h1>My Todo</h1>
        <input
          className="addItems"
          type="text"
          name="item"
          value={item}
          id="item"
          placeholder="Input task name and then tab enter to add"
          onKeyDown={handleKeyDown}
          onChange={onChange}
        />

        <hr />
        <ul>
          {list.map((list) => (
            <TodoItem
              key={list.id}
              item={list}
              deleteItem={deleteItem}
              editItem={editItem}
              updateItem={updateItem}
            ></TodoItem>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
