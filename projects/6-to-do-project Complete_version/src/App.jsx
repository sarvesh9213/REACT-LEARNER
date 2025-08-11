import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  intialtodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];
  const [todoItems, settodoItems] =
    useState(
      intialtodoItems
    ); /* these are basically some examples in which we have created an object in the arrays sarvesh babu */
  const onkeydown = (event) => {
    if (event.key === "Enter") {
      const newTodo = {
        name: event.target.value,
        dueDate: new Date().toLocaleDateString(),
      };
      settodoItems([...todoItems, newTodo]);
      event.target.value = ""; // Clear the input field after adding
    }
    // This function will handle the change in the input field
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onkeydown={onkeydown} />
      <TodoItems todoItems={todoItems}></TodoItems>
      {/* we are passing the todoItems as a prop to the TodoItems component */}
    </center>
  );
}

export default App;
