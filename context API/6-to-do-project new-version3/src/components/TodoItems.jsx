import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteclick }) => {
  const TodoItemsFromContext = useContext([TodoItemsContext]);
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
