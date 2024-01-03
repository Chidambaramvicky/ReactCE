import React from 'react'
import { useState } from 'react'
import axios from 'axios';
export default function PostAxios() {
    const[name,setName]=useState('');
    const handleChange=(event)=>{setName(event.target.value)}
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3001/user',{name})
        .then(res=>
            {
                console.log(res.data)
            })
    }
  return (
    <div>
      <h1>Axios post</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleChange}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
