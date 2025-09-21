import styles from "./Welcome.module.css";
const Welcome = ({ todoItems }) => {
  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}> PLEASE ENTER YOUR TASK ABOVE 👋⚛️ </p>
    )
  );
};
export default Welcome;
