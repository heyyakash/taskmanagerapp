import React, { useState, useEffect } from 'react';
import Center from './Center';
import RightSide from './RightSide';
import Sidebar from './Sidebar';
import Addnote from '../UI/Addnote';
import UpdateNote from '../UI/UpdateNote';
import CalenderContainer from '../Calendar/CalenderContainer';
import { Routes, Route } from 'react-router-dom';
import Loading from '../UI/Loading';
import { useNavigate } from 'react-router-dom';
import AdminDash from '../Admin/AdminDash';
import Settings from './Settings';
import Chat from './Chat';
import { useQuery } from 'react-query';
import { getUser } from '../../hooks';

const Home = () => {
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token')


  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [])
  

  const {data,isLoading,error} = useQuery('user',getUser,{
    onSuccess:()=>navigate('/')
  });

  if(isLoading){
    return<div>Loading</div>
  }
  if(error){
    return <div>error</div>
  }
  if(data && data.payload.type==="admin"){
    return <AdminDash />
  }

  return (
    <>
      <div className='flex flex-col lg:flex-row relative max-w-[1200px] lg:w-[1380px] flex-wrap overflow-hidden border-[.5px] border-gray-200 drop-shadow-2xl rounded-[20px]  lg:h-[95vh] '>
        <Loading showLoading={showLoading} />
        <Addnote />
        <UpdateNote />
        <Sidebar />
        
        <Routes>
          <Route path="/" exact element={<Center />} />
          <Route path="/chat" exact element ={<Chat />} />
          <Route path="/settings" exact element ={<Settings />} />
          <Route path="/cal" exact element={<CalenderContainer />} />
        </Routes>

        <RightSide setShowLoading={setShowLoading} />
      </div>
    </>
  )
}

export default Home