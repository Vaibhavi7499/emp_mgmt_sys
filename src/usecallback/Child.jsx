import React, { memo } from 'react'

const Childcallback = ({name,addition}) => {
    console.log("Child called");
    
  return (
    <div>
        <h2>{name}</h2>
        <button onClick={() => addition(10,20)}>Addition</button>
    </div>
  )
}

export default memo(Childcallback)