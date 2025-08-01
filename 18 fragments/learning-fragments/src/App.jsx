import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./components/Fooditems";
import Errormessagepackage from "./components/Erromessage";
import Container from "./components/Container";
import FoodInput from "./components/Foodinput";
import { useState } from "react";

function App() {
  let [foods, setFoods] = useState(["Fruits", "Vegetables", "Grains"]);
  const [texttoShow, setTextToShow] = useState("healthy foods");
  const handlekeydown = (event) => {
    console.log(event);
    setTextToShow(event.target.value); // Update the text to show based on input
  };
  return (
    <>
      <Container asdf="sdbvdfsdf">
        <h1 className="heading">HEALTHY FOODS</h1>
        <Errormessagepackage sarvesh={foods}></Errormessagepackage>
        <FoodInput handleOnChange={handlekeydown}></FoodInput>
        <p className="text">{texttoShow}</p>
        <Fooditems sarvesh={foods}></Fooditems>
      </Container>
      {/* <Container>
        <p>heyyyyyyyyyyyyyyyyyyyyyyyyyyyy nvdsjnvdsnjv</p>
      </Container> */}
    </>
  );
}

export default App;
