import React, { useState } from "react";
import "./styles.css";
import Counter from "./Counter";

function App() {
  const [delta, setDelta] = useState(0);
  const [maxNum ,plusOne] = useState(0);
  function handlerDelta(e) {
    // console.log(setDelta(Number(e.target.value)));
    setDelta(Number(e.target.value));
  }
  function handlerPlusOne(e) {
    // console.log(setDelta(Number(e.target.value)));
    plusOne(Number(e.target.value));
  }
  return (
    <div className="App">
      <h1> Select a number of steps to Counter</h1>
      <input type="number" value={delta} onChange={handlerDelta} />
      <h1> Select the maximum number for the counter</h1>
      <input type="number" value={maxNum} onChange={handlerPlusOne} />
      <Counter delta={delta} maxNum ={maxNum}/>
      <Counter delta={delta} maxNum = {maxNum}/>
    </div>
  );
}

export default App;