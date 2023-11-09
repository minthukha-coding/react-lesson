import React, { useState } from "react";
import { useReducer } from "react";

const initialValue = {
  people: [],
};

function reducer(state, action) {
  if (action.type === "INPUT_ADD") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
    };
  }
}

function Todo() {
  const [inputValue, setinputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialValue);
  function sumbitHandaler(e) {
    e.preventDefault();
    const newitem = { id: Math.random().toString(), name: inputValue };
    dispatch({ type: "INPUT_ADD", payload: newitem });
    setinputValue("")
  }
  console.log(state);
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={sumbitHandaler}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          placeholder="Enter your text"
        />
        <button type="sumbit">Sumbit</button>
      </form>
      <ul>
        {state.people.map((person,id)=>{
            return <li key={id}>{person.name}</li>
        })}
      </ul>
    </div>
  );
}

export default Todo;
