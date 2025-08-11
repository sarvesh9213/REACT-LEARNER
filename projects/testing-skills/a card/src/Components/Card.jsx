import styles from "./Card.module.css";
import Items from "./Items";
const Card = ({ productsname }) => {
  {
    return (
      // In your Card component, structure it like this:
      <div className={styles.card}>
        {productsname.map((product) => (
          <Items
            key={product.name}
            names={product.name}
            discriptions={product.discription}
            prices={product.price}
          ></Items>
        ))}
      </div>
    );
  }
};
export default Card;
