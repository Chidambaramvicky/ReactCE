import React from 'react'
function Demo()
{
    return(
        <div>
            <h1>demo function</h1>
        </div>
    )
}
function OneExport() {
  return (
    <div>
        <Demo></Demo>
      <h1>one export</h1>
    </div>
  )
}
export default OneExport;
