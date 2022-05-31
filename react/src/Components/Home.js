import React, { useState } from 'react';
import Center from './Center';
// import Login from './Login';
import RightSide from './RightSide';
import Sidebar from './Sidebar';
import Addnote from './Addnote';
import CalenderContainer from './CalenderContainer';
import { Routes, Route } from 'react-router-dom';
import Loading from './Loading';

// import { useNavigate } from 'react-router-dom';

const Home = () => {
   
  const [showLoading,setShowLoading]= useState(false);
  return (
    <>
      <div className='flex relative my-2 py-3 max-w-[1300px] w-full px-4 gap-2 mx-auto h-[98vh] '>
        <Loading showLoading={showLoading} />
        <Addnote  />
        <Sidebar  />
        {/* <Center />   */}
        <Routes>
        <Route path = "/" exact element ={<Center />}/>
        <Route path = "/cal" exact element ={<CalenderContainer />}/>
        </Routes>
          
        <RightSide setShowLoading = {setShowLoading}/>
      </div>
    </>
  )
}

export default Home