import React from 'react';
import {MdSpeakerNotes} from 'react-icons/md';
import {BsFillGrid1X2Fill} from 'react-icons/bs';
import {BsFillCalendarEventFill} from 'react-icons/bs';
import {MdLogout} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Link ,useLocation} from 'react-router-dom';
import { newListState,revListState,doneListState } from '../Atom/taskList';
import { useSetRecoilState } from 'recoil';

const Sidebar = () => {
  const location = useLocation();
  const [setNew,setRev,setDone] = [useSetRecoilState(newListState),useSetRecoilState(revListState),useSetRecoilState(doneListState)]
  
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
    setNew([]);
    setRev([]);
    setDone([]);
  }
  return (
    <>
        <div className='xl:h-full  flex relative lg:flex-col  items-center lg:pt-4 justify-between px-2 lg:px-0 lg:justify-start w-full lg:w-[80px] rounded-xl py-2 bg-secondary'>
            <div className='flex '><MdSpeakerNotes className='text-4xl text-primary cursor-pointer' /></div>
            
            
            <nav className='flex gap-3  text-[1rem] text-gray-400 lg:gap-8 group lg:flex-col items-center justify-start lg:mt-[3.6rem]'>
              <Link to = "/"><BsFillGrid1X2Fill className={`navlink ${location.pathname==="/"?"active":""}`} /></Link>
              <Link to = "/cal"><BsFillCalendarEventFill className = {`navlink ${location.pathname==="/cal"?"active":""}`} /></Link>
              
           
            </nav>
            <div className='lg:mt-auto lg:mb-5'>
              <MdLogout onClick = {handleSignOut} className = 'navlink text-primary text-[1.5rem]' />
            </div>

        </div>
    </>
  )
}

export default Sidebar