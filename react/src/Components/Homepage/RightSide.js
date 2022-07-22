import React from 'react';
import { useQuery } from 'react-query';
import { getTaskRQ } from '../../hooks';
import { userData } from '../../Atom/userState';
import {useRecoilValue } from 'recoil';
import CalendarWidget from '../UI/CalendarWidget';
import { getUser } from '../../hooks';
// import { getQueryClient} from 'react-query';


const RightSide = () => {
  const {data} = useQuery('todos',getTaskRQ);
  const {data:user} = useQuery('user',getUser); 
  const newList = data?.payload.filter((card)=>card.status==="New");
  const revList = data?.payload.filter((card)=>card.status==="rev");
  const doneList = data?.payload.filter((card)=>card.status==="done");
  const fraction = Math.round((doneList?.length / (doneList?.length + newList?.length + revList?.length)) * 100);

 
  return (
    data && 
    <>
      <div className='bg-white bg-opactiy-80 backdrop-blur-lg lg:w-[320px] border-l-[1.1px] border-gray-200 px-6 flex flex-col gap-5 md:py-00 '>
       
       <div className='w-full mx-auto py-[.9569rem] flex justify-between border-b-[1.1px] border-gray-200'>
          <div className='flex gap-4'>
            <img src="https://cdn-icons-png.flaticon.com/512/3662/3662817.png" className='w-10 h-10' alt="profile" />
            <div className='flex flex-col '>
              <h2 className='text-lg tracking-wide'>{user?.payload.firstname + ' ' + user?.payload.lastname }</h2>
              <p className='text-gray-400 text-[.9rem]'>@{user?.payload.username}</p>
            </div>
          </div>
       </div>

      <div className="">
        <CalendarWidget />
      </div>




        {/* <div className='bg-white rounded-[20px] cursor-pointer'>
          <div className="p-2 flex px-7 py-4 justify-between items-center"><p>Total Tasks</p> <p> {newList.length + doneList.length + revList.length}</p></div>
          <div className="p-2 flex px-7 py-4 justify-between items-center"><p>To Do</p> <p> {newList.length}</p></div>
          <div className="p-2 flex px-7 py-4 justify-between items-center"><p>Completed Tasks</p> <p> {doneList.length}</p></div>
        </div> */}

        {/* <div className='flex flex-col justify-center items-center mt-4 gap-2'>
          <p className='text-[0.929rem] text-gray-400'>Your Activity</p>
          <h1 className='text-4xl font-[600]'>{fraction ? fraction : 0}%</h1>
          <div className='bg-gray-200 w-[150px] mb-5 rounded-[20px] overflow-hidden h-2'>
            <div style={{ width: (fraction ? fraction + '%' : 0), height: '100%' }} className="bg-yellow-400"></div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default RightSide