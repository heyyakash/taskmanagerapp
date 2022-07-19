import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { addModalState } from '../../Atom/addNoteAtom';
import {IoAddSharp} from 'react-icons/io5';

const SearchBox = () => {
  const setAddModal = useSetRecoilState(addModalState);
  const addVal =useRecoilValue(addModalState);

  const handleAdd = ()=>{
    if(addVal===false) setAddModal(true);
  }
  return (
    <div className='w-full flex border-b-[1.1px] bg-white  py-5 border-gray-200 justify-between px-8 items-center'>
        {/* <div className='w-[300px] hidden lg:inline-flex h-[40px] bg-secondary items-center justify-around rounded-[200px]'>
            <input type="text" className='bg-transparent h-[30px] outline-none' placeholder='Search' />
            <BsSearch className='text-gray-400' />
        </div> */}
        <h1 className='text-2xl font-semibold text-primary hidden lg:flex'>Your tasks</h1>
        <div onClick = {handleAdd} className='bg-primary h-[40px] flex-grow lg:flex-grow-0 cursor-pointer ml-auto hover:bg-white hover:text-primary font-bold hover:border-2 hover:border-primary transition-all duration-200 text-white rounded-[10px] flex justify-center items-center px-4'><IoAddSharp className='scale-[1.5]' />&nbsp; Add Task</div>
        {/* <div onClick={handleSignOut} className='bg-[#ffbf49] cursor-pointer hover:bg-white hover:text-[#ffbf49] font-bold hover:border-2 hover:border-[#ffbf49] transition-all duration-200 text-white rounded-[200px] flex justify-center items-center px-4 ml-2'>Sign Out</div> */}
    </div>
  )
}

export default SearchBox