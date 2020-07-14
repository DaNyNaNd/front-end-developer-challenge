import React from "react";
import Header from "./components/Header";
import RuneBoard from "./components/RuneBoard";
import PointCounter from './components/PointCounter';
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <RuneBoard />
      <PointCounter />
    </div>
  );
}

export default App;
