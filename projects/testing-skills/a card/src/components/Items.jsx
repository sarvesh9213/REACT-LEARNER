const Items = ({ name, description, price }) => {
  return (
    <div>
      <div className="product-info">
        <div>{name}</div>
        <div>{description}</div>
      </div>
      <div className="card-bottom">
        <div className="price">{price}</div>
        <button className="buy-button">Buy</button>
      </div>
    </div>
  );
};

export default Items;
