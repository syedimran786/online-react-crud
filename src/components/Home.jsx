import React from 'react'
import {toast} from "react-hot-toast"

function Home() {
  let notify=()=>
  {
    toast.error("hello")
    console.log("object")
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={notify}>click</button>
    </div>
  )
}

export default Home
