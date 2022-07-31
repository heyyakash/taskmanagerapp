import React from 'react'
import moment from 'moment'
import { useEffect, useState } from 'react'

const CalendarWidget = () => {
    const [week,setWeek] = useState([])
    const [heading, setHeading] = useState("");
    const startDate = moment().clone().startOf("week");
    const endDate = moment().clone().endOf("week");
   


    useEffect(() => {
        const a =[]
        setHeading(moment().format('MMMM YYYY'));
        const day = startDate.clone();
        const end = endDate.clone().add(1,'day')
        while (day.isBefore(end, "day")) {
            a.push(day.clone());
            day.add(1, 'day');
        }
        setWeek(a);

    }, [])





    return (
        heading &&
        <div className='border-b-[1.1px] hidden xl:block border-gray-200 pb-4'>
            <h1 className='text-lg font-bold pl-2 tracking-wide'>{heading}</h1>
            <div>
                <div className='flex gap-2 mt-4 rounded-xl overflow-hidden'>
                    <div className="day px-2 text-primary font-bold text-sm">S</div>
                    <div className="day px-2 text-primary font-bold text-sm">M</div>
                    <div className="day px-2 text-primary font-bold text-sm">T</div>
                    <div className="day px-2 text-primary font-bold text-sm">W</div>
                    <div className="day px-2 text-primary font-bold text-sm">T</div>
                    <div className="day px-2 text-primary font-bold text-sm">F</div>
                    <div className="day px-2 text-primary font-bold text-sm">S</div>
                </div>
            </div>
            <div className='flex gap-2 my-2 rounded-xl overflow-hidden'>
                {week.map((day) => {
                    return (
                    <>
                    <div key = {day.format("D").toString()} className={`day  ${day.isBefore(moment(),'day')?"text-gray-500":day.isSame(moment(),'day')?"text-white rounded-lg bg-primary":""} font-bold text-sm`}>{day.format('D')}</div>
                    </>
                )
                })}

            </div>
        </div>
    )
}

export default CalendarWidget