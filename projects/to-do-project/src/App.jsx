import AppName from "./components/AppName";
import AddToDO from "./components/AddToDo";
import TodoItem1 from "./components/Todoitem1";
import TodoItem2 from "./components/Todoitem2";
import "./App.css";
function App() {
  return (
    <center className="todo container">
      <AppName />
      <AddToDO />
      <div className="todo-items">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
