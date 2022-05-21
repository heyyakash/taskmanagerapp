import { useState } from 'react';
import {useSetRecoilState,useRecoilValue} from 'recoil';
import { Dialog } from '@headlessui/react';
import { addModalState } from '../Atom/addNoteAtom';

export default function MyDialog() {
    const addVal = useRecoilValue(addModalState);
    const setAddModal = useSetRecoilState(addModalState);
    let [isOpen, setIsOpen] = useState(false)


    return (
        <Dialog open={addVal} onClose={() => setAddModal(false)}>
            <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="w-full border-l-2 border-2 border-primary  max-w-sm rounded-[20px] p-4 bg-white">
                    <Dialog.Title><h1 className='text-2xl font-[500] mb-3'>Add Task</h1></Dialog.Title>
                    {/* <Dialog.Description className='mt-3 mb-2'>
                        Enter the task
                    </Dialog.Description> */}
                    <textarea name="" id="" maxLength={80} className='w-full p-1 text-md bg-secondary rounded-[5px] outline-none h-[120px]'></textarea>
                    

                    <button className='px-4 py-2 rounded-[20px] text-white hover:text-primary hover:bg-white transition-all duration-150 mt-2 bg-primary' onClick={() => setIsOpen(false)}>Add note</button>
                    {/* <button className='primary-button' onClick={() => setIsOpen(false)}>Cancel</button> */}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}