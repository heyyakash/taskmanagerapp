import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../hooks';
import SearchBox from '../UI/SearchBox';
import { updateUser,deleteUser } from '../../hooks';

const Settings = () => {

  const navigate = useNavigate()
  const { data: user } = useQuery('user', getUser, {
    onSuccess: ()=>navigate('/settings')
  })

  const updateMutation = useMutation(updateUser);
  const deleteMutation = useMutation(deleteUser);

  const handleUpdate = (e)=> {
    e.preventDefault();
    updateMutation.mutate({
      id:user.payload._id,
      payload:{
        firstname,lastname,email,username
      }
    },{
      onSuccess:()=>console.log('updated')
    })
  }

  const [firstname,setFirstname] = useState(user.payload.firstname)
  const [lastname,setLastname] = useState(user.payload.lastname)
  const [email,setEmail] = useState(user.payload.email || "")
  const [username,setUserName] = useState(user.payload.username)
  return (
    <div className='flex flex-[1] flex-col gap-6 bg-white/95 backdrop-blur-xl'>
      <SearchBox heading="Settings" />
      <h1 className='text-gray-700 text-4xl font-[600] px-8 mt-2'>Update Settings</h1>
      <form className='px-8 mt-2'>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input type="text" id="first_name" value = {firstname} onChange = {(e)=>setFirstname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input type="text" id="last_name" value = {lastname} onChange = {(e)=>setLastname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <input type="email" id="email" value = {email} onChange = {(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
          </div>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
            <input type="text" value = {username} onChange = {(e)=>setUserName(e.target.value)} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
          </div>
        </div>
        <button onClick={(e)=>handleUpdate(e)} className='p-2 bg-primary text-white hover:bg-white hover:text-primary transition-all duration-100 rounded-lg' type = "submit">Update</button>
        <button className='ml-3 p-2 bg-red-500 text-white hover:bg-white hover:text-red-500 transition-all duration-100 rounded-lg'>Delete Account</button>
      </form>
    </div>
  )
}

export default Settings