import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(0);
  const reset = () => {
    setTime(0);
  };
  return (
    <div className="App">
      <h1 className="mainHeading"><b>Counter App With Reset</b></h1>
      <div className="count">{time}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setTime(time + 1);
          }}
        >
          Add 1 to the Counter
        </button>
        <button onClick={reset}>Reset The Counter</button>

      </div>
    </div>
  );
}
