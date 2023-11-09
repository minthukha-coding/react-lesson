import React from "react";
import { useReducer } from "react";

const initialValue = {
  count: 10,
};

function reducer(state, action) {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }
  if (action.type === "decrement"){
    return{
        ...state,
        count: state.count - action.payload
    }
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);

//   console.log(state);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
}

export default UseReducer;
