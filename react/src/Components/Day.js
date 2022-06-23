import React from 'react';
import moment from 'moment';
import { addModalState } from '../Atom/addNoteAtom';
import { useSetRecoilState } from 'recoil';
import { dateState } from '../Atom/taskDateAtom';

const Day = ({ day, month }) => {
    const setAddModal = useSetRecoilState(addModalState);
    const setDate = useSetRecoilState(dateState)
    const logDate = () => {
        if (day.isAfter(moment(), 'day') || day.isSame(moment(),'day')) {
            setDate(day.format("YYYY-MM-DD"));
            setAddModal(true);
        }
    }
    return (
        <div onClick={logDate} className={`${day.isBefore(moment().startOf('month'), month) || day.isAfter(moment().endOf('month'), month) || day.isBefore(moment(), day) ? "bg-white " : "bg-secondary"} ${day.isBefore(moment(), day) ? "" : "cursor-pointer hover:bg-primary hover:text-white"} ${day.isSame(moment(),'day') ? "border-4 border-primary border-dashed border-offset-2 hover:bg-primary hover:text-white cursor-pointer" : ""} day`}>
            {day.format("D").toString()}
        </div>
    )
}

export default Day