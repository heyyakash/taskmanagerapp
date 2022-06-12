import React from 'react';
import Card from './Card';

const Tab = ({title,Sort,List,Type}) => {
  return (
    <div className='flex flex-[1] lg:h-[85vh] lg:overflow-auto flex-col'>
        <div className='flex px-2 mb-4 justify-between items-center w-full'>
            <p className='font-[500] text-[1.1rem]'>{title}</p>
            {/* <p className='text-gray-400 text-sm'>{Sort}</p> */}
        </div>
        <div className='lg:pr-2'>
        {List && List.map((card)=><Card Title = {card.task} Note = {card.note} Type = {Type} key = {card._id} date ={card.date} Id = {card._id} />)}
           
        </div>
    </div>
  )
}

export default Tab