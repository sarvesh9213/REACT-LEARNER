import styles from "./AddToDo.module.css";
import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
function AddTodo({ OnNewItem }) {
  const [todoName, setTodoName] = useState(``);
  const [todoDate, setTodoDate] = useState(``);
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddClick = () => {
    OnNewItem(todoName, todoDate);
    setTodoName();
    setTodoDate();
  };

  return (
    <div className="container text-center ">
      <form className={"row kg-row ${styles.inputContainer}"}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-2">
          <input type="text" onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddClick}
          >
            <IoAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
