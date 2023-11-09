import React from "react";
import { useState } from "react";

function Count() {
  const [count, setcount] = useState(0);
  function Increment() {
    setcount()
    console.log(count)
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={Increment}>Increment</button>
    </>
  );
}

export default Count;
