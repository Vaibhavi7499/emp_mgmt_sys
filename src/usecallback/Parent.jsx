import React, { useCallback, useState } from "react";
import Childcallback from "./Child";
import "./Parent.css";

const ParentCallback = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Kishor");

    let addition = useCallback((a,b) => {
            console.log(a+b)
    },[name])

  return (
    <div className="parentcallback">
      <div>
        <button onClick={() => setCounter(counter + 1)}>Inc</button>
      </div>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => setCounter(counter - 1)}>Dec</button>
      </div>

      <div>
        <button onClick={() => setName("Kishor Phawade")}>Change Name</button>
      </div>
      <div>
        <Childcallback name={name} addition={addition}/>
      </div>
    </div>
  );
};

export default ParentCallback;
