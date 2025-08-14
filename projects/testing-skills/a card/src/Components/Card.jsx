import React from "react";
import styles from "./Card.module.css";
import Items from "./Items";

const Card = ({ productName, price, description }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{productName}</h2>
      <Items name={productName} description={description} price={price} />
    </div>
  );
};

export default Card;
