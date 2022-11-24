import React, { useState } from "react";
import "./App.css";

const Counter = (props) => {
  let [count, setCount] = useState(0);
  const delta = props.delta;
  const maxNum = props.maxNum;

  function addOne() {
    if(count >= maxNum){
      setCount((count = 0));
    }
    else{
      setCount(count + delta);
    }
    
  }
  function minusOne() {
    setCount(count - delta);
  }
  function resetCount() {
    setCount((count = 0));
  }
  return (
    <div>
      <p>The counter is at: </p>
      <h2>{count}</h2>
      <div>
        <button onClick={minusOne} title="Less delta">less {delta}
        </button>
        <button onClick={resetCount} title="Reset counter">reset Counter
        </button>
        <button onClick={addOne} title="Add one">Add {delta}

        </button>
      </div>
    </div>
  );
};

export default Counter;
