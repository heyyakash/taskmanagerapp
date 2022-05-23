import React from 'react';
import {GrClose} from 'react-icons/gr';
import { useSetRecoilState,useRecoilValue } from 'recoil';
import { dbState } from '../Atom/dbState';

const Card = ({Title,Id}) => {
  const change = useRecoilValue(dbState);
  const setChange = useSetRecoilState(dbState);

  const delTask = async(Id)=>{
    const url = `http://localhost:5500/api/v1/tasks/${Id}`
    const res = await fetch(url,{
      method:"DELETE",
    })
    const data = await res.json();
    setChange([...change,'del']) 
  }

  return (
    <div className='rounded-[20px] flex w-full mb-2 flex-col bg-secondary p-4'>
        <div className='flex justify-between'>
                <p className='font-[500] text-[1rem]'>{Title}</p>
                <GrClose className='cursor-pointer' onClick = {()=>delTask(Id)} />
        </div>
        <div className='mt-2'>
        </div>
        
    </div>
  )
}

export default Card