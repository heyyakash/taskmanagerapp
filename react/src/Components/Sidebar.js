import React from 'react';
import {MdSpeakerNotes} from 'react-icons/md';
import {BsFillGrid1X2Fill} from 'react-icons/bs';
// import {BsGraphUp} from 'react-icons/bs';
import {BsFillCalendarEventFill} from 'react-icons/bs';
// import {BsFillChatLeftFill} from 'react-icons/bs';
import {IoSettings} from 'react-icons/io5';
import {MdLogout} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <>
        <div className='xl:h-full flex relative xl:flex-col  items-center pt-4 justify-start w-[80px] rounded-xl bg-[rgb(243,248,255)]'>
            <div className='brand flex '><MdSpeakerNotes className='text-4xl text-primary cursor-pointer' /></div>
            
            
            <nav className='flex text-[1rem] text-gray-400 md:gap-8 group xl:flex-col items-center justify-start md:mt-[3.6rem]'>
              <Link to = "/"><BsFillGrid1X2Fill className='active navlink' /></Link>
              {/* <BsGraphUp className = 'navlink' /> */}
              <Link to = "/cal"><BsFillCalendarEventFill className = 'navlink' /></Link>
              {/* <BsFillChatLeftFill className = 'navlink' /> */}
              <IoSettings className = 'navlink' />
            </nav>
            <div className='mt-auto mb-5'>
              <MdLogout onClick = {handleSignOut} className = 'navlink text-primary text-[1.5rem]' />
            </div>
        </div>
    </>
  )
}

export default Sidebar