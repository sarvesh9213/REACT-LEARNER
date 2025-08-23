import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
  const initialtodoItems = [];
  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const handleNewitem = (itemName, itemDate) => {
    const newtodoitems = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoItems(newtodoitems);
  };

  const handleDeleteButton = (dltItemName) => {
    const newtodoitems = todoItems.filter((item) => item.name !== dltItemName);
    setTodoItems(newtodoitems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo OnNewItem={handleNewitem} />
      {todoItems.length === 0 && <Welcome></Welcome>}
      <TodoItems
        todoItems={todoItems}
        onDeleteclick={handleDeleteButton}
      ></TodoItems>
      {/* we are passing the todoItems as a prop to the TodoItems component */}
    </center>
  );
}

export default App;
