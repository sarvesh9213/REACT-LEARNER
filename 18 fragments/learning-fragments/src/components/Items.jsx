import styles from "./Items.module.css";

const Item = ({ khana }) => {
  const handleClick = (event) => {
    console.log(event);
    alert(`You clicked on ${khana}`);
  };
  return (
    <li className={`list-group-item ${styles["sarvesh-button"]}`}>
      <span className={styles.sarveshSpan}>{khana}</span>
      <button className={styles.button} onClick={(event) => handleClick(event)}>
        Buy
      </button>
    </li>
  );
};
export default Item;
