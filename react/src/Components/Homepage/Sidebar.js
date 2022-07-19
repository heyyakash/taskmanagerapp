import React from 'react';
import {MdSpeakerNotes ,MdLogout} from 'react-icons/md';
import {BsFillGrid1X2Fill,BsFillCalendarEventFill, BsFillChatFill} from 'react-icons/bs';
import {AiFillSetting} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { Link ,useLocation} from 'react-router-dom';
import { newListState,revListState,doneListState } from '../../Atom/taskList';
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
        <div className='xl:h-full  flex relative lg:flex-col  items-center lg:pt-4 justify-between px-2 border-r-[1.2356px] border-gray-200 lg:justify-start w-full lg:w-[90px] py-2 bg-white'>
            <div className='flex '><MdSpeakerNotes className='text-4xl text-primary cursor-pointer m-3' /></div>
            
            
            <nav className='flex gap-3  text-[1.1rem] text-gray-400 lg:gap-2 group lg:flex-col items-center justify-start lg:mt-[2rem]'>
              <div className={`xl:w-[90px] xl:h-[50px] navlink ${location.pathname==="/"?"active":""} grid place-items-center`}><Link to = "/"><BsFillGrid1X2Fill /></Link></div>
              <div className={`xl:w-[90px] xl:h-[50px] navlink ${location.pathname==="/cal"?"active":""} grid place-items-center`}><Link to = "/cal"><BsFillCalendarEventFill /></Link></div>
              <div className={`xl:w-[90px] xl:h-[50px] navlink ${location.pathname==="/chat"?"active":""} grid place-items-center`}><Link to = "/chat"><BsFillChatFill /></Link></div>
              <div className={`xl:w-[90px] xl:h-[50px] navlink ${location.pathname==="/chat"?"active":""} grid place-items-center text-2xl`}><Link to = "/chat"><AiFillSetting  /></Link></div>      
           
            </nav>
            <div className='lg:mt-auto lg:mb-5'>
              <MdLogout onClick = {handleSignOut} className = 'navlink text-red-400 text-[1.5rem]' />
            </div>

        </div>
    </>
  )
}

export default Sidebar