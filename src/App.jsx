import React, { useEffect } from "react";
import Count from "./components/Count";
import UsState from "./components/UsState";
import UseRefHook from "./components/UseRef";
import { useState } from "react";
import Chat from "./components/Chat";
import UseEffHook from "./components/UseEffHook";
import Effect from "./components/Effect";
import User from "./components/User";
import DataUserFetch from "./components/DataUserFetch";
import TestFAKEAPI from "./components/TestFAKEAPI";
import UseReducer from "./components/UseReducer";
import Todo from "./components/Todo";

function App() {
  // const [time, settime] = useState(0)
  // const [running, setrunning] = useState(false)

  
  return (
    // <>
    // <h1>StopWatch</h1>
    // <span>{("0" + Math.floor((time/60000) % 60))}:</span>
    // <span>{("0" + Math.floor((time/1000) % 60))}:</span>
    // <span>{("0" + ((time/10) % 100))}</span>

    // <button onClick={()=>{setrunning(true)}}>Start</button>
    // <button onClick={()=>{setrunning(false)}}>Stop</button>
    // <button onClick={()=>{settime(0)}}>Rest</button>
    // </>
    // <Chat/>
    <Todo/>

  );
}

export default App;
