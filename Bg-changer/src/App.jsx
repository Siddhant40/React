// import React from 'react'
import Col from "./components/Col";
import "./App.css";
import { useState } from "react";
function App() {
  const [bgcol, SetColor] = useState("olive");

  return (
    <div className="container" style={{ backgroundColor: bgcol }}>
      <div className="bottom">
        <Col color="Red" onClick={() => SetColor("red")}/>
        <Col color="Green" onClick={() => SetColor("green")}/>
        <Col color="Blue" onClick={() => SetColor("blue")}/>
        <Col color="Orange" onClick={() => SetColor("orange")}/>
        <Col color="Purple" onClick={() => SetColor("purple")}/>
        <Col color="Olive" onClick={() => SetColor("olive")}/>
        <Col color="Brown" onClick={() => SetColor("brown")}/>
        <Col color="Grey" onClick={() => SetColor("grey")}/>
        <Col color="black" onClick={()=>SetColor("black")}/>
      </div>
    </div>
  );
}

export default App;
