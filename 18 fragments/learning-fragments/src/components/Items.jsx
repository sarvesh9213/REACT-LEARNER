import styles from "./Items.module.css";

const Item = ({ khana }) => {
  return (
    <li className={`list-group-item ${styles["sarvesh-button"]}`}>
      <span className={styles.sarveshSpan}>{khana}</span>
    </li>
  );
};
export default Item;
