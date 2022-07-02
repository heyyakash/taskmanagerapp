import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className='w-[calc(100%/3.08)] p-4 text-primary rounded-md  cursor-pointer bg-secondary hover:bg-primary hover:text-secondary hover:font-bold'>
        <h3 className='text-lg capitalize'>{user.firstname + " " + user.lastname}</h3>
        <p>@{user.username}</p>
    </div>
  )
}

export default UserCard