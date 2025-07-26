import styles from "./Button.module.css";
const Button = () => {
  return (
    <div>
      <button className={styles["button"]}>C</button>
      <button className={styles["button"]}>7</button>
      <button className={styles["button"]}>8</button>
      <button className={styles["button"]}>9</button>
    </div>
  );
};
export default Button;
