import React from 'react'

export default function Car({carname}) 
{ 
    if(carname === "JCB")
    {
        throw new Error("JCB is not car")
    }
  return (

    <div>
      {carname}
    </div>
  )
    
}
