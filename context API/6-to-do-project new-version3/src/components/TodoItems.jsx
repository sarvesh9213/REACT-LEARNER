import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ onDeleteclick }) => {
  const contextobj = useContext(TodoItemsContext);
  const todoItems = contextobj.todoItems;
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteclick={onDeleteclick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
