import React from 'react';
import Card from './Card';


const Tab = ({title,Sort,List}) => {
  return (
    <div className='flex flex-grow flex-col'>
        <div className='flex px-2 mb-4 justify-between items-center w-full'>
            <p className='font-[500] text-[1.1rem]'>{title}</p>
            <p className='text-gray-400 text-sm'>{Sort}</p>
        </div>
        <div>
        {List && List.map((card)=><Card Title = {card.task} key = {card._id} Id = {card._id} />)}
           
        </div>
    </div>
  )
}

export default Tab