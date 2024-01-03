import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
export default function GetAxios() {
    const[name,setName]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/user')
        .then(res=>{
           const store= res.data;
           setName(store)
        })
    })
  return (
    <div>
        <h1>Axios Get</h1>
        {name.map((person)=><li key={person.id}>{person.name}</li>)}
    </div>
  )
}
