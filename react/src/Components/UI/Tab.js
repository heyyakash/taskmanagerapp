import React from 'react';
import Card from './Card';

const Tab = ({title,Sort,List,Type}) => {
  return (
    <div className='flex flex-[1] bg-[#fafafa] rounded-lg px-4 shadow overflow-hidden lg:h-[98%] lg:overflow-auto flex-col'>
        <div className='flex mb-4 justify-start px-2 py-3 items-center border-b-[1px] border-gray-200 w-full'>
        <div className={`${Type==="new"?"bg-slate-400":Type==="rev"?"bg-orange-400":"bg-green-400"} w-2 h-2 rounded-full`}></div>
            <p className='font-[500] text-[1.2rem] text-slate-900 ml-2'>{title}</p>
            {/* <p className='text-gray-400 text-sm'>{Sort}</p> */}
        </div>
        <div>
        {List && List.map((card)=><Card Title = {card.task} Note = {card.note} Type = {Type} key = {card._id} date ={card.date} Id = {card._id} />)}
           
        </div>
    </div>
  )
}

export default Tab