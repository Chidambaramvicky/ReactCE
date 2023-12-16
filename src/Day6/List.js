import React from 'react'

export default function List() {
    const animals=["dog","cat","lion","tiger"]
  const result=  animals.map((ani)=><li>{ani}</li>)
  return (
    <div>
      <ul>
      {  result}
      </ul>
    </div>
  )
}
// import React from 'react'
// function DisplayNAme(props)
// {
//     return(<div>
//         <h1>{props.name}</h1>
//         </div>
//         )
// }

// export default function List() {
//     const stud=["pranv","sumanth","suji","vicky"]
//     const stname=stud.map((stu)=><DisplayNAme name={stu}></DisplayNAme>)
//   return (
//     <div>
//       {stname}
//     </div>
//   )
// }
