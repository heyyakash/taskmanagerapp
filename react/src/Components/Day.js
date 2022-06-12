import React from 'react';
import moment from 'moment';

const Day = ({ day ,month}) => {
    const logDate = () => {
        const date = day.format("L").toString();
        const dateArr = date.split("/");
        const finalDate = dateArr.reverse().join("-"); 
        console.log(day.format("YYYY-MM-DD"));
        
    }
    return (
        <div onClick={logDate} className={`${day.isBefore(moment().startOf('month'), month) || day.isAfter(moment().endOf('month'), month) || day.isBefore(moment(), day) ? "bg-white " : "bg-secondary"} ${day.isBefore(moment(), day) ? "" : "cursor-pointer hover:bg-primary hover:text-white"} ${day.isSame((new Date()).toISOString().split('T')[0]) ? "border-4 border-primary border-dashed border-offset-2" : ""} day`}>
            {day.format("D").toString()}
        </div>
    )
}

export default Day