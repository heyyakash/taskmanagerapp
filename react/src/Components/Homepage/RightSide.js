import React from 'react';
import { useQuery } from 'react-query';
import { getTaskRQ } from '../../hooks';


const RightSide = () => {

  const {data} = useQuery('todos',getTaskRQ);
  const newList = data?.payload.filter((card)=>card.status==="New");
  const revList = data?.payload.filter((card)=>card.status==="rev");
  const doneList = data?.payload.filter((card)=>card.status==="done");
  const fraction = Math.round((doneList?.length / (doneList?.length + newList?.length + revList?.length)) * 100);


  return (
    data && 
    <>
      <div className='bg-secondary lg:w-[320px] flex flex-col gap-5 px-3 md:py-0 rounded-xl'>
        <div className="flex justify-between w-full pl-5 items-center">
          <h1 className='text-3xl font-[500] capitalize'>Hello <br /> {data?.payload.firstname}</h1>
          <img src="https://cliply.co/wp-content/uploads/2020/10/442010362_WINKING_AVATAR_3D_400.png" alt="avatar" className='w-[100px]  scale-[1.1] h-[100px]' />
        </div>

        <div className='bg-white rounded-[20px] cursor-pointer'>
          <div className="p-2 flex px-7 py-4 justify-between items-center"><p>Total Tasks</p> <p> {newList.length + doneList.length + revList.length}</p></div>
          <div className="p-2 flex px-7 py-4 justify-between items-center"><p>To Do</p> <p> {newList.length}</p></div>
          <div className="p-2 flex px-7 py-4 justify-between items-center"><p>Completed Tasks</p> <p> {doneList.length}</p></div>
        </div>

        <div className='flex flex-col justify-center items-center mt-4 gap-2'>
          <p className='text-[0.929rem] text-gray-400'>Your Activity</p>
          <h1 className='text-4xl font-[600]'>{fraction ? fraction : 0}%</h1>
          <div className='bg-gray-200 w-[150px] mb-5 rounded-[20px] overflow-hidden h-2'>
            <div style={{ width: (fraction ? fraction + '%' : 0), height: '100%' }} className="bg-yellow-400"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightSide