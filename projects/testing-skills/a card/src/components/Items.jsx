const Items = ({ names, discriptions, prices }) => {
  return (
    <>
      <div>{names}</div>
      <div>{discriptions}</div>
      <div className="card-bottom">
        <div>{prices}</div>
        <button>Buy</button>
      </div>
    </>
  );
};
export default Items;
