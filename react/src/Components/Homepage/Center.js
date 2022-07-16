import React, { useEffect } from 'react'
import SearchBox from '../UI/SearchBox';
import Tab from '../UI/Tab';
import {newListState,revListState,doneListState} from '../../Atom/taskList';
import { dbState } from '../../Atom/dbState';
import { useSetRecoilState,useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';


const Center = () => {
    const change = useRecoilValue(dbState);
    const list = useRecoilValue(newListState);
    const rev = useRecoilValue(revListState);
    const done = useRecoilValue(doneListState);
    const setList = useSetRecoilState(newListState);
    const setRev = useSetRecoilState(revListState);
    const setDone = useSetRecoilState(doneListState);
    
    // useEffect(() => {
    //     getTask();
    // }, [change,setDone,setList,setRev]);

    const getTaskRQ = async () => {
        const url = `${process.env.REACT_APP_URL}/api/v1/tasks`;
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'token': localStorage.getItem('token')
                }
            })
            const data = await res.json();
            return data;
    }

    const {isLoading,isError,data,error} = useQuery('todos',getTaskRQ);

    // console.log(data);

    // const getTask = async () => {
    //     try {
            
    //         setList(data.payload.filter((card)=>card.status==="New" ));
    //         setRev(data.payload.filter((card)=>card.status==="rev"  ));
    //         setDone(data.payload.filter((card)=>card.status==="done"));
            

    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }

    if(isLoading){
        return<div>Loading</div>
    }    
    return (
        data&&
        <>
            <div className='flex flex-[1] flex-col gap-6 px-2'>
                <SearchBox />
                <div className='w-full flex flex-col lg:flex-row gap-4'>
                    <Tab List={data?.payload.filter((card)=>card.status==="New")} title="To Do" Sort="Date" Type="new" />
                    <Tab List={data?.payload.filter((card)=>card.status==="rev")} title="In Review" Sort="Priority" Type ="rev" />
                    <Tab List={data?.payload.filter((card)=>card.status==="done")} title="Done" Sort="Date" Type="done" />
                </div>
            </div>
        </>
    )
}

export default Center