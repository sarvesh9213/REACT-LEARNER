import styles from "./Items.module.css";

const Item = ({ khana, handleClick }) => {
  return (
    <li className={`list-group-item ${styles["sarvesh-button"]}`}>
      <span className={styles.sarveshSpan}>{khana}</span>
      <button className={styles.button} onClick={handleClick}>
        Buy
      </button>
    </li>
  );
};
export default Item;
