import React, { useEffect } from 'react';
import Center from './Center';
import Login from './Login';
import RightSide from './RightSide';
import Sidebar from './Sidebar';
// import { useNavigate } from 'react-router-dom';

const Home = () => {
  // const navigate = useNavigate()
  const token = localStorage.getItem('token');
  
  
  return (
    <>
      <div className='flex my-2 py-3 max-w-[1300px] w-full px-4 gap-2 mx-auto h-[98vh] '>
        <Sidebar />
        <Center />
        <RightSide />
      </div>
    </>
  )
}

export default Home