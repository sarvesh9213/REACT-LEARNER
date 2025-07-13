import AppName from "./components/AppName";
import AddToDO from "./components/AddToDo";
import React from "react";
import TodoItem1 from "./components/Todoitem1";
import TodoItem2 from "./components/Todoitem2";
TodoItem1;
function App() {
  return (
    <center class="todo container">
      <AppName />
      <AddToDO />
      <TodoItem1 />
      <TodoItem2 />
    </center>
  );
}

export default App;
