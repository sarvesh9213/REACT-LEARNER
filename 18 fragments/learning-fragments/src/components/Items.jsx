import styles from "./Items.module.css";

const Item = ({ foods }) => {
  return (
    <li className={`list-group-item ${styles["sarvesh-button"]}`}>
      <span className={styles.sarveshSpan}>{foods}</span>
    </li>
  );
};
export default Item;
