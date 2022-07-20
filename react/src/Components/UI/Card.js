import React, { useState, useEffect } from 'react';
import { updateNoteAtom,updateNoteText,updateNoteNote,updateNoteDate ,updateNoteTaskId} from '../../Atom/updateNoteAtom';
import { GrClose } from 'react-icons/gr';
import { MdOutlineDone } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import moment from 'moment';
import { useSetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from 'react-query';
import {FiEdit2} from 'react-icons/fi'

const Card = ({ Title, date, Id, Type, Note }) => {
  const queryClient = useQueryClient();
  const [color, setColor] = useState("bg-secondary");
  const updateNoteModal = useSetRecoilState(updateNoteAtom);
  const updateNote = useSetRecoilState(updateNoteNote);
  const updateText = useSetRecoilState(updateNoteText);
  const updateDate = useSetRecoilState(updateNoteDate);
  const setTaskID = useSetRecoilState(updateNoteTaskId);


  // useEffect(() => {
  //   const diff = Math.abs(new Date() - new Date(date));
  //   if (Type !== "done") {
  //     if (diff <= 86400000 || moment(date).isBefore(moment(), 'day')) {
  //       setColor("bg-red-500");
  //     }
  //     else if (diff > 86400000 && diff <= 172800000) {
  //       setColor("bg-orange-400");
  //     }
  //     else {
  //       setColor("bg-secondary")
  //     }

  //   }
  //   else {
  //     setColor("bg-secondary")
  //   }

  // }, [Type, date])


  const updateTask = async (change) => {
    try {
      const { Id, action } = change;
      const url = `${process.env.REACT_APP_URL}/api/v1/tasks/${Id}`;
      await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: action
        })
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  const updateTaskMutation = useMutation(updateTask);

  const handleReview = () => {
    updateTaskMutation.mutate({ action: "rev", Id }, {
      onSuccess: () => queryClient.invalidateQueries('todos')
    })
  }
  const handleDone = () => {
    updateTaskMutation.mutate({ action: "done", Id }, {
      onSuccess: () => queryClient.invalidateQueries('todos')
    })
  }

  const delTask = async (Id) => {
    const url = `${process.env.REACT_APP_URL}/api/v1/tasks/${Id}`;
    await fetch(url, {
      method: "DELETE",
    })
  }

  const deleteTaskMutation = useMutation(delTask);

  const handleDelete = () => {
    deleteTaskMutation.mutate(Id, {
      onSuccess: () => queryClient.invalidateQueries('todos')
    })
  }

  const handleEdit = () => {
    setTaskID(Id);
    updateNote(Note);
    updateText(Title);
    updateDate(date);
    updateNoteModal(true);
  }

  return (
    <div className={`rounded-[20px] bg-white flex w-full mb-2 mx-auto flex-col p-4`}>
      <div className='flex items-center justify-between'>
        <p className='font-[500] text-[1rem] '>{Title} {moment(date).isBefore(moment(), 'day') && Type !== "done" ? "(Backlog)" : ""}</p>

        <GrClose className={`cursor-pointer `} onClick={handleDelete} />
      </div>
      <div className='mt-2'>
        {Note && (
          <>

            <p>{Note}</p>


          </>
        )}
        <p className={`text-[.8rem] ${color !== "bg-secondary" ? "text-white" : "text-gray-400"} my-2 `}>{Type !== "done" ? `Due ${date}` : `Completed`}</p>
      </div>


      {
        Type !== "done" ? (<>
          <div className='mt-2 flex justify-start items-center gap-2'>
            <div onClick={handleDone} className={`access-buttons ${color !== "bg-secondary" ? "text-red-500" : ""} `}><MdOutlineDone /></div>
            <div onClick={handleReview} className={`access-buttons ${Type === "rev" ? "hidden" : ""} ${color !== "bg-secondary" ? "text-red-500" : ""}  `}><AiOutlineEye /></div>
            <div onClick={handleEdit} className={`access-buttons ${color !== "bg-secondary" ? "text-red-500" : ""}  `}><FiEdit2 /></div>
          </div>
        </>) : ""
      }



    </div >
  )
}

export default Card