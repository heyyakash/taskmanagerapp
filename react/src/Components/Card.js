import React from 'react';
import {GrClose} from 'react-icons/gr';


const Card = ({Title}) => {
  return (
    <div className='rounded-[20px] flex w-full mb-2 flex-col bg-secondary p-4'>
        <div className='flex justify-between'>
                <p className='font-[500] text-[1rem]'>{Title}</p>
                <GrClose className='cursor-pointer' />
        </div>
        <div className='mt-2'>
        </div>
        
    </div>
  )
}

export default Card