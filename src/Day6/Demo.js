import React from 'react'

export default function Demo() {
    const animals = ["dog", "cat", "lion"]
  const result = animals.map((ani, index) => <li key={index}>{index} - {ani}</li>)
  return (
    <div>
      <ul type="circle">
        {result}
      </ul>
    </div>
  )
}
