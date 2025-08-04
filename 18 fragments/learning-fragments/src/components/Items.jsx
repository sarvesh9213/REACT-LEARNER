import styles from "./Items.module.css";

const Item = ({ khana, bought, handleClick }) => {
  return (
    <li
      className={`list-group-item ${styles["sarvesh-button"]} ${
        bought && "active"
      }`}
    >
      <span className={styles.sarveshSpan}>{khana}</span>
      <button className={styles.button} onClick={handleClick}>
        Buy
      </button>
    </li>
  );
};
export default Item;
