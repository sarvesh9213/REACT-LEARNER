import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foods = [];
  let foods = ["Fruits", "Vegetables", "Grains", "Protein Foods", "Dairy"];
  let emptymessage = foods.length == 0 ? <h3>i am hungry</h3> : null;
  return (
    <>
      <h1 className="fst-italic">HEALTHY FOODS</h1>
      {emptymessage}
      {/* {foods.length == 0 && <h3>i am hungry</h3>} */}
      <ul className="list-group">
        {foods.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
