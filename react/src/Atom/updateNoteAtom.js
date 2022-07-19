import { atom } from "recoil";

export const updateNoteAtom = new atom({
    key :"updateModal",
    default:false
})

export const updateNoteTaskId = new atom({
    key:"taskId",
    default:""
})

export const updateNoteText = new atom({
    key:"updateText",
    default:""
})
export const updateNoteNote = new atom({
    key:"updateNote",
    default:""
})

export const updateNoteDate = new atom({
    key:"updateNoteDate",
    default:""
})