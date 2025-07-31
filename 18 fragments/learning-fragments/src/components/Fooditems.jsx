import Itemiii from "./Items";
let Fooditems = ({ sarvesh }) => {
  return (
    <>
      <ul className="list-group">
        {sarvesh.map((item) => (
          <Itemiii
            key={item}
            khana={item}
            handleClick={() => alert(`You clicked on ${item}`)}
          ></Itemiii>
        ))}
        {/* this item or items/ itemaxy anything is not nessary */}
      </ul>
    </>
  );
};
export default Fooditems;
