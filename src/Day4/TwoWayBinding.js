import React, { useState } from 'react'

export default function TwoWayBinding() {
    const[name,setName]=useState("")
    const changeName=(event)=>setName(event.target.value)
  return (
    <div>
      <input onChange={changeName} value={name}></input>
        <p>The name is {name}</p>
    </div>
  )
}
