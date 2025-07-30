import styles from "./Items.module.css";

const Item = ({ khana }) => {
  return (
    <li className={`list-group-item ${styles["sarvesh-button"]}`}>
      <span className={styles.sarveshSpan}>{khana}</span>
      <button
        className={styles.button}
        onClick={() => alert(`You clicked on ${khana}`)}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
