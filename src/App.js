import React from "react";
import Header from "./components/Header";
import RuneBoard from "./components/RuneBoard";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="board-container">
        <RuneBoard />
      </div>
    </div>
  );
}

export default App;
