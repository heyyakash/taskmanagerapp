import React from 'react';

const Alert = ({color,msg,show,success}) => {
  return (
    <div className={`absolute top-[2rem] ${show===true?"":"hidden"}  ${!success?"bg-[#fc0341] ":"bg-green-300" } drop-shadow-lg rounded-md p-[1rem] text-white`}>{msg}</div>
  )
}

export default Alert