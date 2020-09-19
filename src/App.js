import React from "react";
import "./styles.css";
import Graph from "./Graph";

export default function App() {
  return (
    <>
      <div className="App">
        <img
          class="logo"
          src="https://staging-members-rds.herokuapp.com/images/Real-Dev-Squad@1x.png"
          alt=""
        />
        <div class="rdsName">Real Dev Squad</div>
        <Graph />
      </div>
    </>
  );
}
