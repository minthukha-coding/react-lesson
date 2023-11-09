import React from 'react'
import { useState,useEffect } from 'react'

function Effect() {
    const [size, setsize] = useState(window.innerWidth);

    function checkSize() {
        setsize(window.innerWidth)
    }
    useEffect(()=>{
        console.log("use effect is render")
        window.addEventListener("resize",checkSize)
        return() => {
            console.log("remove addeven listenner")
            window.removeEventListener("resize",checkSize)
      }
    })
    console.log("component is render")
  return (
    <div>
        <div>{size} PX</div>
    </div>
  )
}

export default Effect