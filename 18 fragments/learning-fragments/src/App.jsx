import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./components/Fooditems";
import Errormessagepackage from "./components/Erromessage";
import Container from "./components/Container";
import FoodInput from "./components/Foodinput";

function App() {
  let foods = ["Fruits", "Vegetables", "Grains", "Protein Foods", "Dairy"];
  let texttoShow = "Healthy Foods";
  const handleOnChange = (event) => {
    console.log(event.target.value);
    texttoShow = event.target.value; // Update the text to show based on input
  };
  return (
    <>
      <Container asdf="sdbvdfsdf">
        <h1 className="heading">HEALTHY FOODS</h1>
        <Errormessagepackage sarvesh={foods}></Errormessagepackage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
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
