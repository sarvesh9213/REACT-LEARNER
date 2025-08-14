import React from "react";
import styles from "./Card.module.css"; // Reuse the same CSS module

const Items = ({ name, description, price }) => {
  return (
    <div>
      <div className={styles["product-info"]}>
        <div>{name}</div>
        <div>{description}</div>
      </div>
      <div className={styles["card-bottom"]}>
        <div className={styles.price}>{price}</div>
        <button className={styles["buy-button"]}>Buy</button>
      </div>
    </div>
  );
};

export default Items;
