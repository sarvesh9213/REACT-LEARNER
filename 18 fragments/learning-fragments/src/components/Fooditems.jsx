import Itemiii from "./Items";
import { act, useState } from "react";
let Fooditems = ({ sarvesh }) => {
  let [activeitems, setActiveitems] = useState([]);
  let onBuyButton = (e, item) => {
    let newItems = [...activeitems, item];
    setActiveitems(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {sarvesh.map((item) => (
          <Itemiii
            key={item}
            khana={item}
            bought={activeitems.includes(item)}
            handleClick={(e) => onBuyButton(e, item)}
          ></Itemiii>
        ))}
        {/* this item or items/ itemaxy anything is not nessary */}
      </ul>
    </>
  );
};
export default Fooditems;
