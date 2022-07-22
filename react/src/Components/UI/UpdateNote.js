import { useState } from 'react';
import { dateState } from '../../Atom/taskDateAtom';
import {useSetRecoilState,useRecoilValue} from 'recoil';
import { Dialog } from '@headlessui/react';
import { updateNoteDate,updateNoteAtom,updateNoteNote,updateNoteText,updateNoteTaskId } from '../../Atom/updateNoteAtom';
import { useMutation,useQueryClient } from 'react-query';

export default function MyDialog() {
    const queryClient = useQueryClient();
    const [modal,setModal] = [useRecoilValue(updateNoteAtom),useSetRecoilState(updateNoteAtom)];
    const [date,setDate] = [useRecoilValue(updateNoteDate),useSetRecoilState(updateNoteDate)];
    const [text,setText]= [useRecoilValue(updateNoteText),useSetRecoilState(updateNoteText)];
    const [note,setNote]= [useRecoilValue(updateNoteNote),useSetRecoilState(updateNoteNote)];
    const [id,setId] = [useRecoilValue(updateNoteTaskId),useSetRecoilState(updateNoteTaskId)];


    const updateTask = async (data) => {
        const {change,Id} = data;
        const url = `${process.env.REACT_APP_URL}/api/v1/tasks/${Id}`
        try{
            await fetch(url,{
                method:"PATCH",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(change)
            })
        }
        catch(err){
            console.log(err)
        }
    }

    const updateMutation = useMutation(updateTask);

    const handleSubmit = (e) => {
        e.preventDefault()
        updateMutation.mutate({change:{text,note,date},Id:id},{
            onSuccess: () => {
                clear();
                queryClient.invalidateQueries('todos');
            }
        })
    }

    const clear = () => {
        setModal(false)
        setText('');
        setNote('');
        setDate((new Date()).toISOString().split('T')[0]);
    }

    return (
        <Dialog open={modal} onClose={() => clear()}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center transition-all duration-100 justify-center p-4">
                <Dialog.Panel className="w-full border-l-2 border-2 border-primary  max-w-sm rounded-[20px] p-4 bg-white">
                    <Dialog.Title><p className='text-2xl font-[500] mb-3'>Update Task</p></Dialog.Title>
                  
                    <input value = {text} onChange={(e)=>setText(e.target.value)} placeholder = "Enter Title" name="" id="" maxLength={80} className='w-full p-1 text-md bg-secondary rounded-[5px] outline-none h-[30px]'></input>
                    <textarea value = {note} onChange={(e)=>setNote(e.target.value)} name="" placeholder="Enter Note" id="" maxLength={80} className='w-full mt-2 p-1 text-md bg-secondary rounded-[5px] outline-none h-[120px]'></textarea>
                    <input value = {date} min = {(new Date()).toISOString().split('T')[0]} className='border-2 border-primary w-[100%] p-2 rounded-md text-primary focus:border-primary' type="date" onChange = {(e)=>setDate(e.target.value.toString())} />                    
                    <br />
                    <button onClick = {handleSubmit}  disabled = {text.length===0?true:false} className='px-4 disabled:opacity-10 py-2 rounded-[20px] text-white hover:text-primary hover:bg-white transition-all duration-150 mt-2 bg-primary'>Update note</button>
                    
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}