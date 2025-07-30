import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./components/Fooditems";
import Errormessagepackage from "./components/Erromessage";
import Container from "./components/Container";

function App() {
  let foods = ["Fruits", "Vegetables", "Grains", "Protein Foods", "Dairy"];
  return (
    <>
      <Container asdf="sdbvdfsdf">
        <h1 className="heading">HEALTHY FOODS</h1>
        <Errormessagepackage sarvesh={foods}></Errormessagepackage>
        <Fooditems sarvesh={foods}></Fooditems>
      </Container>
      {/* <Container>
        <p>heyyyyyyyyyyyyyyyyyyyyyyyyyyyy nvdsjnvdsnjv</p>
      </Container> */}
    </>
  );
}

export default App;
