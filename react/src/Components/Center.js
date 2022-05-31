import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import Tab from './Tab'
import {newListState,revListState,doneListState} from '../Atom/taskList';
import { dbState } from '../Atom/dbState';
import { useSetRecoilState,useRecoilValue } from 'recoil'

const Center = () => {
    const change = useRecoilValue(dbState);
    const list = useRecoilValue(newListState);
    const rev = useRecoilValue(revListState);
    const done = useRecoilValue(doneListState);
    const setList = useSetRecoilState(newListState);
    const setRev = useSetRecoilState(revListState);
    const setDone = useSetRecoilState(doneListState);
    useEffect(() => {
        const url = "http://localhost:5500/api/v1/tasks";
        getTask(url);
    }, [change]);

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
            setList(data.payload.filter((card)=>card.status==="New"));
            setRev(data.payload.filter((card)=>card.status==="rev"))
            setDone(data.payload.filter((card)=>card.status==="done"))

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
                    <Tab List={list} title="To Do" Sort="Date" Type="new" />
                    <Tab List={rev} title="In Review" Sort="Priority" Type ="rev" />
                    <Tab List={done} title="Done" Sort="Date" Type="done" />
                </div>
            </div>
        </>
    )
}

export default Center