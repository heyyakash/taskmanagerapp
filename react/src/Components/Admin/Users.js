import React from 'react'
import { useEffect,useState } from 'react'
import UserCard from './UserCard';

const Users = () => {
    
    const [users,setUsers] = useState([]);
    
    useEffect(() => {
        getAll();
    }, [])


    const getAll = async() => {
        const token  = localStorage.getItem('token');
        const url = `http://localhost:5500/api/v1/admin/getall`;
        try{
            const res = await fetch(url,{
                method:"GET",
                headers:{
                    "token":token
                }
            })
            const data = await res.json();
            setUsers(data);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        users && 
        <div className='flex-[1] py-2 h-[95vh] rounded-xl'>
            <h2 className='text-2xl font-semibold text-primary '>Users</h2>
            <div className='my-4 flex gap-2 items-center flex-wrap'>
            {users.map((user)=><UserCard user = {user} key = {user._id} />)}
            </div>
        </div>
    )
}

export default Users