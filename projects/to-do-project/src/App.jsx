import AppName from "./components/AppName";
import AddToDO from "./components/AddToDo";
import TodoItem1 from "./components/Todoitem1";
import TodoItem2 from "./components/Todoitem2";
import "./App.css";
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
