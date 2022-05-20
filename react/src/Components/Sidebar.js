import React from 'react';
import {MdSpeakerNotes} from 'react-icons/md';
import {BsFillGrid1X2Fill} from 'react-icons/bs';
import {BsGraphUp} from 'react-icons/bs';
import {BsFillCalendarEventFill} from 'react-icons/bs';
import {BsFillChatLeftFill} from 'react-icons/bs';
import {IoSettings} from 'react-icons/io5';

const Sidebar = () => {
  return (
    <>
        <div className='xl:h-full flex relative xl:flex-col  items-center pt-4 justify-start w-[80px] rounded-xl bg-[rgb(243,248,255)]'>
            <div className='brand flex absolute '><MdSpeakerNotes className='text-4xl text-primary cursor-pointer' /></div>
            
            
            <nav className='flex text-[1rem] text-gray-400 md:gap-8 group xl:flex-col items-center justify-start my-auto'>
              <BsFillGrid1X2Fill className='active navlink' />
              <BsGraphUp className = 'navlink' />
              <BsFillCalendarEventFill className = 'navlink' />
              <BsFillChatLeftFill className = 'navlink' />
              <IoSettings className = 'navlink' />
            </nav>
        </div>
    </>
  )
}

export default Sidebar