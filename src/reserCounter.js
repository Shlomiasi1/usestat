import React, { useState } from "react";
import "./styles.css";

export default function resetCounter() {
  const [time, setTime] = useState(0);
  const reset = () => {
    setTime(0);
  };
  return (
    <div className="App">
      <h1 className="mainHeading">Blackout's Counter App With Reset</h1>
      <div className="count">{time}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setTime(time + 1);
          }}
        >
          Add Blackout Time +
        </button>
        <button onClick={reset}>Reset Blackout Time</button>
        <button
          onClick={() => {
            setTime(time - 1);
          }}
        >
          Sub Blackout Time -
        </button>
      </div>
    </div>
  );
}