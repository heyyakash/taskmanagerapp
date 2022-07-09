import React from 'react';
import { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { deleteUser } from '../../functions';

const UserCard = ({ user }) => {
    const [deleted,setDeleted] = useState(false);
    const handleDelete = async() => {
        await deleteUser(user._id);
        setDeleted(true);
    }


    return (
        <div className={`transition-all duration-150 ${deleted?"scale-0":"w-[calc(100%/3.08)]"} overflow-hidden items-center flex justify-between p-4 text-primary rounded-md  cursor-pointer bg-secondary hover:bg-primary hover:text-secondary hover:font-bold`}>
            <div>
                <h3 className='text-lg capitalize'>{user.firstname + " " + user.lastname}</h3>
                <p>@{user.username}</p>
            </div>
            <div className={`p-2 text-xl ${user.type === "admin" ? "hidden" : ""} bg-white text-primary rounded-[10px] transition-all duration-150 hover:bg-primary hover:text-red-500`}>
                <AiTwotoneDelete onClick={handleDelete} />
            </div>
        </div>
    )
}

export default UserCard