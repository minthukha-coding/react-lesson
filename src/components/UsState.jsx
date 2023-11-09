import React from "react";
import { useState } from "react";



function UsState() {
  const [age, setAge] = useState(42);
  const [name, setName] = useState("Taylor");
  const [count, setcount] = useState(0)

  function handleClick() {
    setName("Lemon");
    console.log(name);
  }


  function handleAge(){
    setAge(18);
    console.log(age)
  }
  return (
    <>
      <h1>Hello World</h1>
      <div>{age}</div>
      <div>{name}</div>
      <div>{count}</div>
      <button onClick={handleClick}>Change name</button>
      <button onClick={handleAge}>Change age</button>

    </>
  );
}

export default UsState;
