import Clockheading from "./COMPONENTS/clockheading";
import Clockslogan from "./COMPONENTS/Clockslogan";
import Currenttime from "./COMPONENTS/Currenttime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <Clockheading />
      <Clockslogan />
      <Currenttime />
    </center>
  );
}

export default App;
