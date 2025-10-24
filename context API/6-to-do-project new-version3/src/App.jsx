import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useReducer, useState } from "react";
import Welcome from "./components/Welcome";
import { TodoItemsContext } from "./store/todo-items-store";
const todoItemsReducer = (action) => {
  // its like usestate but another type of a hook
  return [];
};
function App() {
  const initialtodoItems = [];
  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const [newtodoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: " New_Item",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newItemAction);
    // setTodoItems((currrryValue) => {
    //   const newtodoitems = [
    //     ...currrryValue,
    //     { name: itemName, dueDate: itemDate },
    //   ];
    //   return newtodoitems;
    // });
    // setTodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, dueDate: itemDate },
    // ]);
  };

  const DeleteItem = (dltItemName) => {
    const newtodoitems = todoItems.filter((item) => item.name !== dltItemName);
    setTodoItems(newtodoitems);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, DeleteItem }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcome></Welcome>
        <TodoItems></TodoItems>
        {/* we are passing the todoItems as a prop to the TodoItems component */}
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
