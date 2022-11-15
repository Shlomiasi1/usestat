
import {useState} from "react";

function Counter() {
    const [count, setCount ] = useState(1);
    function AddOne(){
        setCount(
            function(oldCount){
                return oldCount+1
            }
        )
    }
  return (
    <div className="Counter">
      <h1>Counter</h1>
      <p>Count in: {count}</p>
      <button onClick={AddOne}>Click To Add One To Counter</button>

    </div>
  );
}

export default Counter;