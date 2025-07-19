import Itemiii from "./Items";
let Fooditems = ({ sarvesh }) => {
  return (
    <>
      <ul className="list-group">
        {sarvesh.map((itemaxy) => (
          <Itemiii key={itemaxy} foods={itemaxy}></Itemiii>
        ))}
        {/* this item or items/ itemaxy anything is not nessary */}
      </ul>
    </>
  );
};
export default Fooditems;
