import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { GrPrevious, GrNext } from 'react-icons/gr';
import Day from './Day';

const CalenderContainer = () => {
  const [value, setValue] = useState(moment());
  const [calendar, setCalendar] = useState([]);

  const month = value.clone().format("MMMM").toString();
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");



  useEffect(() => {
    const a = [];
    const day = startDay.clone().subtract(1, "day");
    while (day.isBefore(endDay, "day")) {
      a.push(
        Array(7).fill(0).map(() => day.add(1, "day").clone())
      )
    };
    setCalendar(a);
  }, [startDay,endDay]);


  return (
    <>
      <div className='flex flex-[1] flex-col py-2 mt-2 lg:mt-0 lg:py-3 gap-6 bg-secondary rounded-xl px-2 lg:px-3'>
        {/* <Calendar onChange={setValue} value = {value}></Calendar> */}
        <div className='bg-white w-full flex flex-col h-full rounded-xl'>

          <div className='w-full h-[30px] p-4 flex justify-between items-center '>
            <span className='calendar-btn' onClick={() => setValue(value.clone().subtract(1, 'months'))}>
              <GrPrevious />
            </span>
            <h2 className='text-xl font-semibold'>{month}</h2>
            <span className='calendar-btn' onClick={() => setValue(value.clone().add(1, 'months'))}>
              <GrNext />
            </span>
          </div>

          <div className='flex p-2 rounded-xl overflow-hidden'>
            <div className="day px-2 bg-secondary">Sun</div>
            <div className="day px-2 bg-secondary">Mon</div>
            <div className="day px-2 bg-secondary">Tue</div>
            <div className="day px-2 bg-secondary">Wed</div>
            <div className="day px-2 bg-secondary">Thu</div>
            <div className="day px-2 bg-secondary">Fri</div>
            <div className="day px-2 bg-secondary">Sat</div>

          </div>

          <div className=' flex-1 flex flex-wrap p-2'>


            {calendar.map((week) => (
              week.map((day) => (

                <Day key={day.format("L").toString()} day={day} month={month}></Day>
              ))
            ))}
          </div>
        </div>
      </div>
    </>

  )
}

export default CalenderContainer