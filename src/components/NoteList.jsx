import React from "react";
import { useReducer, useState } from "react";

const initialValue = {
  people: [],
};

function reducer(state,action) {
  if(action.type === "ADD_NOTE"){
    const newPeople = [...state.people,action.payload];
    return{
      ...state,
      people: newPeople
    }
  }
}

function NoteList() {
  const [inputValue, setinputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialValue);

  function sumbmitHandaler(e){
    e.preventDefault();
    const newItems = {id:Math.random().toString(),name:inputValue};
    dispatch({type:"ADD_NOTE",payload:newItems})
    setinputValue("")
  }

  console.log(state)

  return (
    <>
      <div>
        <h1>Note Web</h1>
        <form onSubmit={sumbmitHandaler}>
          <input
            type="text"
            onChange={(e) => setinputValue(e.target.value)}
            value={inputValue}
            placeholder="Enter you wanna note text"
          />
          <button type="submit">Note that!</button>
        </form>
      </div>
    </>
  );
}

export default NoteList;
