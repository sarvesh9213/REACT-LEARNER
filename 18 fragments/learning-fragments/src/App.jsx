import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./components/Fooditems";
import Errormessagepackage from "./components/Erromessage";

function App() {
  let foods = ["Fruits", "Vegetables", "Grains", "Protein Foods", "Dairy"];
  return (
    <>
      <h1 className="fst-italic">HEALTHY FOODS</h1>
      <Errormessagepackage sarvesh={foods}></Errormessagepackage>
      <Fooditems sarvesh={foods}></Fooditems>
    </>
  );
}

export default App;
