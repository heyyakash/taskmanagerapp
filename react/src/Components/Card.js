import React, { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { dbState } from '../Atom/dbState';
import { MdOutlineDone } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import moment from 'moment';

const Card = ({ Title, date, Id, Type, Note }) => {
  const [color, setColor] = useState("bg-secondary");
  useEffect(() => {
    const diff = Math.abs(new Date() - new Date(date)) ;
    if (Type !== "done") {
      if (diff<= 86400000 || moment(date).isBefore(moment(),'day')){
        setColor("bg-red-500");
      }
      else if(diff>86400000 && diff<=172800000 ){
        setColor("bg-orange-400");
      }
      else{
        setColor("bg-secondary")
      }

    }
    else{
      setColor("bg-secondary")
    }
    
  }, [])

  const change = useRecoilValue(dbState);
  const setChange = useSetRecoilState(dbState);
  const updateTask = async (action) => {
    try {
      const url = `${process.env.REACT_APP_URL}/api/v1/tasks/${Id}` || `http://localhost:5500/api/v1/tasks/${Id}`;
      const res = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: action
        })
      })
      await res.json();
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
    const url = `${process.env.REACT_APP_URL}/api/v1/tasks/${Id}`;
    const res = await fetch(url, {
      method: "DELETE",
    })
      await res.json();
    setChange([...change, 'del'])
  }

  return (
    <div className={`rounded-[20px] ${color!=="bg-secondary"?"text-white":""} flex w-full mb-2 flex-col ${color} p-4`}>
      <div className='flex items-center justify-between'>
        <p className='font-[500] text-[1rem]'>{Title} {moment(date).isBefore(moment(),'day') && Type!=="done"?"(Backlog)":""}</p>

        <GrClose className={`cursor-pointer `} onClick={() => delTask(Id)} />
      </div>
      <div className='mt-2'>
      {Note && (
        <>

          <p>{Note}</p>


        </>
      )}
      <p className={`text-[.8rem] ${color!=="bg-secondary"?"text-white":"text-gray-400"} my-2 `}>{Type!=="done"?`Due ${date}`:`Completed`}</p>
    </div>


      {
    Type !== "done" ? (<>
      <div className='mt-2 flex justify-start items-center gap-2'>
        <div onClick={handleDone} className={`access-buttons ${color!=="bg-secondary"?"text-red-500":""} `}><MdOutlineDone /></div>
        <div onClick={handleReview} className={`access-buttons ${Type === "rev" ? "hidden" : ""} ${color!=="bg-secondary"?"text-red-500":""}  `}><AiOutlineEye /></div>
      </div>
    </>) : ""
  }



    </div >
  )
}

export default Card