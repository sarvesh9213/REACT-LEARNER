import styles from "./AddToDo.module.css";
import React, { useState, useRef, useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const {} = useContext(TodoItemsContext);
  const handleAddClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, todoDate);
  };

  return (
    <div className="container text-center ">
      <form
        className={`row kg-row ${styles.inputContainer}`}
        onSubmit={handleAddClick}
      >
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-2">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
