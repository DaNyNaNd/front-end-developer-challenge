import React from "react";
import Header from "./components/Header";
import RuneBoard from "./components/RuneBoard";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <img src='/talent-calc-bg.png' alt="background" />
      <Header />
      <div className="board-container">
        <RuneBoard />
      </div>
    </div>
  );
}

export default App;
