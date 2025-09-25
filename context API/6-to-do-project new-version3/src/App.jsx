import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const initialtodoItems = [];
  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const addNewItem = (itemName, itemDate) => {
    setTodoItems((currrryValue) => {
      const newtodoitems = [
        ...currrryValue,
        { name: itemName, dueDate: itemDate },
      ];
      return newtodoitems;
    });
    // setTodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, dueDate: itemDate },
    // ]);
  };

  const DeleteItem = (dltItemName) => {
    const newtodoitems = todoItems.filter((item) => item.name !== dltItemName);
    setTodoItems(newtodoitems);
  };
  const defaultToDoItems = [{ name: "buy protien", dueDate: "today" }];

  return (
    <TodoItemsContext.Provider value={defaultToDoItems}>
      <center className="todo-container">
        <AppName />
        <AddTodo OnNewItem={handleNewitem} />
        <Welcome></Welcome>
        <TodoItems onDeleteclick={DeleteItem}></TodoItems>
        {/* we are passing the todoItems as a prop to the TodoItems component */}
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
