import React, { useEffect } from 'react'
import SearchBox from '../UI/SearchBox';
import Tab from '../UI/Tab';
import { useQuery } from 'react-query';
import { getTaskRQ } from '../../hooks';

const Center = () => {
 
    const {isLoading,isError,data,error} = useQuery('todos',getTaskRQ);

    
    if(error){
        return<div>Error</div>
    }    
    return (
        data&&
        <>
            <div className='flex flex-[1] flex-col gap-6 px-2'>
                <SearchBox />
                <div className='w-full flex flex-col lg:flex-row gap-4'>
                    <Tab List={data?.payload.filter((card)=>card.status==="New")} title="Next Up" Sort="Date" Type="new" />
                    <Tab List={data?.payload.filter((card)=>card.status==="rev")} title="In Progress" Sort="Priority" Type ="rev" />
                    <Tab List={data?.payload.filter((card)=>card.status==="done")} title="Done" Sort="Date" Type="done" />
                </div>
            </div>
        </>
    )
}

export default Center