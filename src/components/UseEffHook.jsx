import React from 'react'
import { useEffect,useState } from 'react'

function UseEffHook() {
    const [screenSize, setscreenSize] = useState(window.innerWidth);

    function checkSize () {
        setscreenSize(window.innerWidth)
    }
    useEffect(() => {
        console.log("Use Effect is render")
        window.addEventListener("resize",checkSize)

        return()=> {
            console.log("remove event listenner")
            window.removeEventListener("resize",checkSize)
        }
    })
    
    console.log("Component is render")
  return (
    <>
    <div>{screenSize} PX</div>
    </>
  )
}

export default UseEffHook