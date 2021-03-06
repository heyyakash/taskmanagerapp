import { useState } from 'react';
import { dateState } from '../../Atom/taskDateAtom';
import {useSetRecoilState,useRecoilValue} from 'recoil';
import { Dialog } from '@headlessui/react';
import { addModalState } from '../../Atom/addNoteAtom';
import { useMutation,useQueryClient } from 'react-query';

export default function MyDialog() {
    const queryClient = useQueryClient();
    const date = useRecoilValue(dateState);
    const setDate = useSetRecoilState(dateState);
    const [text,setText]= useState('');
    const [note,setNote] =useState('');
    const addVal = useRecoilValue(addModalState);
    const setAddModal = useSetRecoilState(addModalState);
 
    

    const addNoteRQ = async (data) => {
        const url = `${process.env.REACT_APP_URL}/api/v1/tasks`;
        return await fetch(url,{
            method:'POST',
            headers:{"Content-Type":"application/json",token:localStorage.getItem('token')},
            body:JSON.stringify(data)
            
        });
    }

    const addNoteMutation = useMutation(addNoteRQ);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            addNoteMutation.mutate({
                task:text,
                note,
                date
            },{
            onSuccess:()=>{
                queryClient.invalidateQueries('todos')
                clear();
            },
            onError:()=>{console.log("error")}  
            })
        }
        catch(err){
            console.log(err)
        }
    }

  


    const clear = () => {
        setAddModal(false)
        setText('');
        setNote('');
        setDate((new Date()).toISOString().split('T')[0]);
    }

    return (
        <Dialog open={addVal} onClose={() => clear()}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center transition-all duration-100 justify-center p-4">
                <Dialog.Panel className="w-full border-l-2 border-2 border-primary  max-w-sm rounded-[20px] p-4 bg-white">
                    <Dialog.Title><p className='text-2xl font-[500] mb-3'>Add Task</p></Dialog.Title>
                  
                    <input value = {text} onChange={(e)=>setText(e.target.value)} placeholder = "Enter Title" name="" id="" maxLength={80} className='w-full p-1 text-md bg-secondary rounded-[5px] outline-none h-[30px]'></input>
                    <textarea value = {note} onChange={(e)=>setNote(e.target.value)} name="" placeholder="Enter Note" id="" maxLength={80} className='w-full mt-2 p-1 text-md bg-secondary rounded-[5px] outline-none h-[120px]'></textarea>
                    <input value = {date} min = {(new Date()).toISOString().split('T')[0]} className='border-2 border-primary w-[100%] p-2 rounded-md text-primary focus:border-primary' type="date" onChange = {(e)=>setDate(e.target.value.toString())} />                    
                    <br />
                    <button onClick = {handleSubmit}  disabled = {text.length===0?true:false} className='px-4 disabled:opacity-10 py-2 rounded-[20px] text-white hover:text-primary hover:bg-white transition-all duration-150 mt-2 bg-primary'>Add note</button>
                    
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}