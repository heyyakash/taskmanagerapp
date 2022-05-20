import React, { useEffect, useState } from 'react'

const RightSide = () => {
  const [name, setName] = useState("User");
  useEffect(() => {
    const url = "http://localhost:5500/api/v1/getuser";
    getuser(url)
  }, [])

const getuser = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      token: localStorage.getItem("token")
    }
  })
  const data = await res.json();
  setName(data.payload.firstname);
}
  return (
    <>
      <div className='bg-secondary md:w-[320px] px-3 md:py-0 rounded-xl'>
        <div className="flex justify-between w-full pl-5 items-center">
          <h1 className='text-3xl font-[700]'>Hello {name}</h1>
          <img src="https://cliply.co/wp-content/uploads/2020/10/442010362_WINKING_AVATAR_3D_400.png" alt="avatar" className='w-[100px]  scale-[1.1] h-[100px]' />
        </div>
      </div>
    </>
  )
}

export default RightSide