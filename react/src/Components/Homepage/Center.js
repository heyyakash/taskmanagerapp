import React, { useEffect } from 'react'
import SearchBox from '../UI/SearchBox';
import Tab from '../UI/Tab';
import { useQuery } from 'react-query';
import { getTaskRQ } from '../../hooks';
import Empty from '../UI/Empty';

const Center = () => {

    const { isLoading, isError, data, error } = useQuery('todos', getTaskRQ);

    if (error) {
        return <div>Error</div>
    }
    return (
        data &&
        <>
            <div className='flex flex-[1] flex-col gap-6 h-full bg-white lg:bg-opacity-[.95] lg:backdrop-blur-2xl'>
                <SearchBox heading="Your Tasks" />
                {data.payload.length !== 0 ?
                    <>
                        <h1 className='text-gray-700 text-4xl font-[600] px-8 mt-2'>Active Tasks</h1>
                        <div className='w-full flex flex-col lg:flex-row  px-8 h-full gap-8'>
                            <Tab List={data?.payload.filter((card) => card.status === "New")} title="Next Up" Sort="Date" Type="new" />
                            <Tab List={data?.payload.filter((card) => card.status === "rev")} title="In Progress" Sort="Priority" Type="rev" />
                            <Tab List={data?.payload.filter((card) => card.status === "done")} title="Done" Sort="Date" Type="done" />
                        </div>
                    </> :
                    <Empty />}
            </div>
        </>
    )
}

export default Center