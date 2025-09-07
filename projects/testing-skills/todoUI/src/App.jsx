import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>TO DO APP </h1>;
      <div>
        <input type="text" placeholder="enter ur task" />
        <input type="date" />
        <button>ADD</button>
      </div>
      <div class="grid text-center">
        <div class="g-col-4">.buy milk</div>
        <div class="g-col-4">9/10/25</div>
        <div class="g-col-2">
          <button>DELETE</button>
        </div>
      </div>
      <div class="grid text-center">
        <div class="g-col-4">.g-col-4</div>
        <div class="g-col-4">.g-col-4</div>
        <div class="g-col-4">.g-col-4</div>
      </div>
    </>
  );
}

export default App;
