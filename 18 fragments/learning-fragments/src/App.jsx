import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foods = ["Fruits", "Vegetables", "Grains", "Protein Foods", "Dairy"];
  return (
    <>
      <h1 className="fst-italic">HEALTHY FOODS</h1>
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
