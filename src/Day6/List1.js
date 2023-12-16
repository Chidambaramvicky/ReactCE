import React from 'react'

export default function List1() {
    const college=[
        {id:1,stuname:"sachin",age:26},
        {id:2,stuname:"vijay", age:27},
        {id:1,stuname:"Vicky", age:28}]
        const display =college.map((col)=><li key={col.id}> {col.stuname} {col.age}</li>)
  return (
    <div style={{backgroundColor:"red"}}>
      <h1>List of students</h1>
      {display}
    </div>
  )
}
