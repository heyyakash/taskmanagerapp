import React, { useState, useEffect } from 'react';
import Center from './Center';
import RightSide from './RightSide';
import Sidebar from './Sidebar';
import Addnote from '../UI/Addnote';
import CalenderContainer from '../Calendar/CalenderContainer';
import { Routes, Route } from 'react-router-dom';
import Loading from '../UI/Loading';
import { useNavigate } from 'react-router-dom';
import AdminDash from '../Admin/AdminDash';
import ChatContainer from '../Chat/ChatContainer';
import { userData } from '../../Atom/userState';
import { useSetRecoilState,useRecoilValue } from 'recoil';

const Home = () => {
  const [showLoading, setShowLoading] = useState(false);
  // const [data, setData] = useState();
  const navigate = useNavigate();
  const data = useRecoilValue(userData);
  const setData = useSetRecoilState(userData);

  useEffect(() => {
    

    const getuser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate('/login');
      }
      else {
        setShowLoading(true);
        const url = `${process.env.REACT_APP_URL}/api/v1/getuser`;
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            token
          }
        })
        const data = await res.json();
        setData(data);
        navigate('/');
        setShowLoading(false);
      }
      


    }


    getuser();
  }, [])

  if(data && data.payload.type==="admin"){
    return <AdminDash />
  }

  return (
    <>
      <div className='flex flex-col lg:flex-row relative my-2 py-3 max-w-[1300px] w-full px-4 gap-2 mx-auto lg:h-[98vh] '>
        <Loading showLoading={showLoading} />
        <Addnote />
        <Sidebar />

        <Routes>
          <Route path="/" exact element={<Center />} />
          <Route path="/cal" exact element={<CalenderContainer />} />
          <Route path="/chat" exact element ={<ChatContainer />} />
        </Routes>

        <RightSide setShowLoading={setShowLoading} />
      </div>
    </>
  )
}

export default Home