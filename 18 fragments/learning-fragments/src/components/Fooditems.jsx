import Itemiii from "./Items";
let Fooditems = ({ sarvesh }) => {
  return (
    <>
      <ul className="list-group">
        {sarvesh.map((itemkaaaaa) => (
          <Itemiii key={itemkaaaaa} foods={itemkaaaaa}></Itemiii>
        ))}
        {/* this item or items/ itemaxy anything is not nessary */}
      </ul>
    </>
  );
};
export default Fooditems;
