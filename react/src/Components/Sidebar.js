import React from 'react';
import {MdSpeakerNotes} from 'react-icons/md';
import {BsFillGrid1X2Fill} from 'react-icons/bs';
// import {BsGraphUp} from 'react-icons/bs';
import {BsFillCalendarEventFill} from 'react-icons/bs';
// import {BsFillChatLeftFill} from 'react-icons/bs';
import {IoSettings} from 'react-icons/io5';
import {MdLogout} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Link ,useLocation} from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
  const [active,setActive] = useState('active');
  const location = useLocation();
  
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <>
        <div className='xl:h-full  flex relative xl:flex-col  items-center lg:pt-4 justify-between px-2 lg:px-0 lg:justify-start w-full lg:w-[80px] rounded-xl py-2 bg-secondary'>
            <div className='flex '><MdSpeakerNotes className='text-4xl text-primary cursor-pointer' /></div>
            
            
            <nav className='flex gap-3  text-[1rem] text-gray-400 md:gap-8 group xl:flex-col items-center justify-start md:mt-[3.6rem]'>
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