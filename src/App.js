import React, { useState } from "react";
import "./styles.css";
import Counter from "./Counter";

function App() {
  const [resetCounter , SetReset] = useState(false)
  const [delta, setDelta] = useState(0);
  const [maxNum ,plusOne] = useState(0);
  const [maxNumberEnter, setMaxNumberEnter] = useState(0);

  function setMaximumNumber(val) {
    if (val > maxNumberEnter) {
      setMaxNumberEnter(val);
    }
  }


  function handlerDelta(e) {
    setDelta(Number(e.target.value));
  }

  function handlerPlusOne(e) {
    plusOne(Number(e.target.value));
  }

  function getReset(data){
    console.log(data)
    SetReset(data)
  }

  return (
    <div className="App">
      <h1> Select a number of steps to Counter</h1>
      <input type="number" value={delta} onChange={handlerDelta} />
      <h1> Select the maximum number for the counter</h1>
      <input type="number" value={maxNum} onChange={handlerPlusOne} />
      <h1>The maximum Value until now is: {maxNumberEnter} </h1>

      <Counter delta={delta} maxNum ={maxNum} getReset={getReset} needToReset = {resetCounter} setMaximumNumber={setMaximumNumber}/>
      <Counter delta={delta} maxNum = {maxNum} getReset={getReset} needToReset = {resetCounter} setMaximumNumber={setMaximumNumber}/>
    
    </div>
  );
}

export default App;