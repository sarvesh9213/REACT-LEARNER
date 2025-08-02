import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./components/Fooditems";
import Errormessagepackage from "./components/Erromessage";
import Container from "./components/Container";
import FoodInput from "./components/Foodinput";
import { useState } from "react";

function App() {
  let [foods, setFoods] = useState([" Proteins", "Dairy"]);

  const onkeydown = (event) => {
    if (event.key == "Enter") {
      let newfoods = event.target.value;
      event.target.value = "";
      let newfoodsitems = [...foods, newfoods];
      setFoods(newfoodsitems);
    }
  };
  return (
    <>
      <Container asdf="sdbvdfsdf">
        <h1 className="heading">HEALTHY FOODS</h1>
        <Errormessagepackage sarvesh={foods}></Errormessagepackage>
        <FoodInput handleKeydown={onkeydown}></FoodInput>

        <Fooditems sarvesh={foods}></Fooditems>
      </Container>
      {/* <Container>
        <p>heyyyyyyyyyyyyyyyyyyyyyyyyyyyy nvdsjnvdsnjv</p>
      </Container> */}
    </>
  );
}

export default App;
