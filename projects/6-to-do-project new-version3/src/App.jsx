import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const initialtodoItems = [
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
  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const handleNewitem = (itemName, itemDate) => {
    console.log("New item added:", itemName, itemDate);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo OnNewItem={handleNewitem} />
      <TodoItems todoItems={todoItems}></TodoItems>
      {/* we are passing the todoItems as a prop to the TodoItems component */}
    </center>
  );
}

export default App;
