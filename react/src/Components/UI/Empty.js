import React from 'react'
import empty from '../../assets/empty.png'

const Empty = () => {
  return (
    <div className='flex justify-center items-center flex-col flex-[1]'>
        <img src={empty} alt="nothing" className='h-[300px]' />
        <h2 className='text-2xl text-slate-500 font-semibold '>Nothing Here</h2>
    </div>
  )
}

export default Empty