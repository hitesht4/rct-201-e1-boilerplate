import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  return (
    <div className="App">
      {/* Clock */}
      <div className="Clock">
      <Clock/>
      </div>
      {/* List 1  initialValues [1, 2, 3] */}
      <div className="Lists">
      <List1 initialValue={[1,2,3]} label="List 1"/>
      {/* List 2  initialValues [4, 5] */}
      <List2 initialValue={[4,5]} label="List 2" />
      </div>
    </div>
  );
}

export default App;
