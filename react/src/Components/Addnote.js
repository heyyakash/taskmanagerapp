import { useState } from 'react';
import {useSetRecoilState,useRecoilValue} from 'recoil';
import { Dialog } from '@headlessui/react';
import { addModalState } from '../Atom/addNoteAtom';

export default function MyDialog() {
    const [text,setText]= useState('');
    const addVal = useRecoilValue(addModalState);
    const setAddModal = useSetRecoilState(addModalState);
    let [isOpen, setIsOpen] = useState(false)
    
    
    const addnote = async()=>{
        const url = "http://localhost:5500/api/v1/tasks";
        const res = await fetch(url,{
            method:'POST',
            headers:{"Content-Type":"application/json",token:localStorage.getItem('token')},
            body:JSON.stringify({
                task:text
            })
        })
        setAddModal(false);
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
                    <textarea value = {text} onChange={(e)=>setText(e.target.value)} name="" id="" maxLength={80} className='w-full p-1 text-md bg-secondary rounded-[5px] outline-none h-[120px]'></textarea>
                    

                    <button onClick = {addnote} className='px-4 py-2 rounded-[20px] text-white hover:text-primary hover:bg-white transition-all duration-150 mt-2 bg-primary'>Add note</button>
                    {/* <button className='primary-button' onClick={() => setIsOpen(false)}>Cancel</button> */}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}