import React from 'react'
import RightSide from '../Homepage/RightSide'
import Sidebar from '../Homepage/Sidebar'
import Center from '../Homepage/Center'

const AdminDash = ({data}) => {
  return (
    <div className='flex flex-col lg:flex-row relative my-2 py-3 max-w-[1300px] w-full px-4 gap-2 mx-auto lg:h-[98vh] '>
      <Sidebar type = "admin" />
      <Center />
      <RightSide data = {data} />
    </div>
  )
}

export default AdminDash