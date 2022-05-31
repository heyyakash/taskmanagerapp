import React from 'react'
import loading from '../assets/giphy.gif';

const Loading = ({showLoading}) => {
  
    return (
    <>
        <div className={`absolute flex justify-center ${showLoading===false?"hidden":""}  w-full h-full items-center bg-white z-[100]`}>
            <img src={loading} alt="loading" className='h-[150px]' />
        </div>
    </>
  )
}

export default Loading