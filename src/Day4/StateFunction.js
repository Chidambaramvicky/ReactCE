import React, { useState } from 'react'

export default function StateFunction() {
    const[carName,setCarName]=useState("BMW");
    const changeCarName=()=>setCarName("THAR");
    const [count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1)
    const decrCount=()=>setCount(count-1)
  return (
    <div>
      <h1>My car Name is {carName}</h1>
      <button onClick={changeCarName}>click me</button>
      <h1>count {count}</h1>
      <button onClick={changeCount}>incre</button>
      <button onClick={decrCount}>Decre</button>
    </div>
  )
}
