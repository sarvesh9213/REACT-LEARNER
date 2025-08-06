import styles from "./App.module.css";
import Display from "./components/Display";
import Container from "./components/Container";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClicked = (buttontext) => {
    if (buttontext === "C") {
      setCalVal("");
    } else if (buttontext === "=") {
      setCalVal(eval(calVal));
    } else {
      setCalVal(calVal + buttontext);
    }
  };
  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.title}>Calculator</h1>
        <p className={styles.description}>A simple calculator app</p>
        <center>
          <div className={styles.calculator}>
            <Display displayVal={calVal} />
            <Container onButtonClicked={onButtonClicked}></Container>
          </div>
        </center>
      </div>
    </>
  );
}

export default App;
