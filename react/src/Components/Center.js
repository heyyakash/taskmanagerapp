import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import Tab from './Tab'

const Center = () => {
    const [list, setList] = useState(['']);
    const [rev, setRev] = useState(['']);
    const [done, setDone] = useState(['']);
    useEffect(() => {
        const url = "http://localhost:5500/api/v1/tasks";
        getTask(url);
    }, []);

    const getTask = async (url) => {
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'token': localStorage.getItem('token')
                }
            })
            const data = await res.json();
            console.log(data.payload);
            setList(data.payload.filter((card)=>card.status=="New"));
            setRev(data.payload.filter((card)=>card.status=="rev"))
            setDone(data.payload.filter((card)=>card.status=="done"))

        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className='flex flex-[1] flex-col gap-6 px-2'>
                <SearchBox />
                <div className='w-full flex gap-4'>
                    <Tab List={list} title="To Do" Sort="Date" />
                    <Tab List={rev} title="In Review" Sort="Priority" />
                    <Tab List={done} title="Done" Sort="Date" />
                </div>
            </div>
        </>
    )
}

export default Center