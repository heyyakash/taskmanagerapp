import { useState } from 'react';
import {useSetRecoilState,useRecoilValue} from 'recoil';
import { Dialog } from '@headlessui/react';
import { addModalState } from '../Atom/addNoteAtom';
import { dbState } from '../Atom/dbState';

export default function MyDialog() {
    const [date,setDate] = useState();
    const [text,setText]= useState('');
    const [note,setNote] =useState('');
    const addVal = useRecoilValue(addModalState);
    const change = useRecoilValue(dbState);
    const setChange = useSetRecoilState(dbState);
    const setAddModal = useSetRecoilState(addModalState);
    let [isOpen, setIsOpen] = useState(false)
    
    
    const addnote = async()=>{
        const url = "http://localhost:5500/api/v1/tasks";
        const res = await fetch(url,{
            method:'POST',
            headers:{"Content-Type":"application/json",token:localStorage.getItem('token')},
            body:JSON.stringify({
                task:text,
                note,
                date
            })
        })
        setAddModal(false);
        setText('');
        setNote('');
        setChange([...change,'add']);
    }


    return (
        <Dialog open={addVal} onClose={() => setAddModal(false)}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center transition-all duration-100 justify-center p-4">
                <Dialog.Panel className="w-full border-l-2 border-2 border-primary  max-w-sm rounded-[20px] p-4 bg-white">
                    <Dialog.Title><p className='text-2xl font-[500] mb-3'>Add Task</p></Dialog.Title>
                    {/* <Dialog.Description className='mt-3 mb-2'>
                        Enter the task
                    </Dialog.Description> */}
                    <input value = {text} onChange={(e)=>setText(e.target.value)} placeholder = "Enter Title" name="" id="" maxLength={80} className='w-full p-1 text-md bg-secondary rounded-[5px] outline-none h-[30px]'></input>
                    <textarea value = {note} onChange={(e)=>setNote(e.target.value)} name="" placeholder="Enter Note" id="" maxLength={80} className='w-full mt-2 p-1 text-md bg-secondary rounded-[5px] outline-none h-[120px]'></textarea>
                    <input className='border-2 border-primary w-[100%] p-2 rounded-md text-primary focus:border-primary' type="date" onChange = {(e)=>setDate(e.target.value.toString())} />                    
                    <br />
                    <button placeholder='Select Date' onClick = {addnote} disabled = {text.length===0 || date.length===0 ?true:false} className='px-4 disabled:opacity-10 py-2 rounded-[20px] text-white hover:text-primary hover:bg-white transition-all duration-150 mt-2 bg-primary'>Add note</button>
                    {/* <button className='primary-button' onClick={() => setIsOpen(false)}>Cancel</button> */}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}