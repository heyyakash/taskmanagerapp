import React from 'react'

const Alert = ({color,msg,show}) => {
  return (
    <div className={`absolute top-[2rem] ${show===true?"":"hidden"} bg-${color}-400 rounded-md p-[1rem] text-white`}>{msg}</div>
  )
}

export default Alert