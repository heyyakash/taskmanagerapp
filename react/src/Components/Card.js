import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { dbState } from '../Atom/dbState';
import { MdOutlineDone } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';

const Card = ({ Title, Id, Type ,Note}) => {
  const change = useRecoilValue(dbState);
  const setChange = useSetRecoilState(dbState);

  const updateTask = async (action) => {
    try {
      const url = `http://localhost:5500/api/v1/tasks/${Id}`;
      const res = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: action
        })
      })
      const data = await res.json();
      console.log(data);
      setChange([...change, 'update'])
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleReview = () => {
    updateTask("rev");
  }
  const handleDone = () => {
    updateTask("done");
  }

  const delTask = async (Id) => {
    const url = `http://localhost:5500/api/v1/tasks/${Id}`
    const res = await fetch(url, {
      method: "DELETE",
    })
    const data = await res.json();
    setChange([...change, 'del'])
  }

  return (
    <div className='rounded-[20px] flex w-full mb-2 flex-col bg-secondary p-4'>
      <div className='flex justify-between'>
        <p className='font-[500] text-[1rem]'>{Title}</p>
        <GrClose className='cursor-pointer' onClick={() => delTask(Id)} />
      </div>
      {Note && (
        <>
        <div className='mt-2'>
          <p>{Note}</p>
        </div>
        </>
      )}

      {Type !== "done" ? (<>
        <div className='mt-2 flex justify-start items-center gap-2'>
          <div onClick={handleDone} className='access-buttons '><MdOutlineDone /></div>
          <div onClick={handleReview} className={`access-buttons ${Type==="rev"?"hidden":""}`}><AiOutlineEye /></div>
        </div>
      </>) : ""}



    </div>
  )
}

export default Card