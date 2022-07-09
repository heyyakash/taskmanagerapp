import React from 'react'
import RightSide from '../Homepage/RightSide'
import Sidebar from '../Homepage/Sidebar'
// import Center from '../Homepage/Center';
import Users from './Users'
import { Route, Routes } from 'react-router-dom';
import { userData } from '../../Atom/userState';
import { useRecoilValue } from 'recoil';

const AdminDash = () => {
  const data =useRecoilValue(userData);
  return (
    <div className='flex flex-col lg:flex-row relative my-2 py-3 max-w-[1300px] w-full px-4 gap-2 mx-auto lg:h-[98vh] '>
      <Sidebar type = "admin" />
      <Routes>
        <Route exact path= "/" element = {<Users />} />
        {/* <Route exact path= "/userdata/:id" element = {<Center type = "admin" />} /> */}
      </Routes>
      <RightSide data = {data} />
    </div>
  )
}

export default AdminDash