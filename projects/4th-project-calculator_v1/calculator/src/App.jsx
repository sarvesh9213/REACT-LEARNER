import styles from "./App.module.css";
import Display from "./components/Display";
import Container from "./components/Container";

function App() {
  return (
    <>
      <h1 className={styles.title}>Calculator</h1>
      <p className={styles.description}>A simple calculator app</p>
      <center>
        <div className={styles.calculator}>
          <Display />
          <Container></Container>
        </div>
      </center>
    </>
  );
}

export default App;
