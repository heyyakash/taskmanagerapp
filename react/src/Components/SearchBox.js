import React from 'react'
import {BsSearch} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { addModalState } from '../Atom/addNoteAtom';

const SearchBox = () => {
  const setAddModal = useSetRecoilState(addModalState);
  const addVal =useRecoilValue(addModalState)
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  const handleAdd = ()=>{
    if(addVal===false) setAddModal(true);
  }
  return (
    <div className='w-full flex'>
        <div className='w-[300px] h-[40px] bg-secondary flex items-center justify-around rounded-[200px]'>
            <input type="text" className='bg-transparent h-[30px] outline-none' placeholder='Search' />
            <BsSearch className='text-gray-400' />
        </div>
        <div onClick = {handleAdd} className='bg-[#ffbf49] cursor-pointer ml-auto hover:bg-white hover:text-[#ffbf49] font-bold hover:border-2 hover:border-[#ffbf49] transition-all duration-200 text-white rounded-[200px] flex justify-center items-center w-[180px]'>Add Task</div>
        <div onClick={handleSignOut} className='bg-[#ffbf49] cursor-pointer hover:bg-white hover:text-[#ffbf49] font-bold hover:border-2 hover:border-[#ffbf49] transition-all duration-200 text-white rounded-[200px] flex justify-center items-center px-4 ml-2'>Sign Out</div>
    </div>
  )
}

export default SearchBox