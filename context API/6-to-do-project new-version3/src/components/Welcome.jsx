import { useContext } from "react";
import styles from "./Welcome.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
const Welcome = () => {
  const todoItems = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}> PLEASE ENTER YOUR TASK ABOVE 👋⚛️ </p>
    )
  );
};
export default Welcome;
