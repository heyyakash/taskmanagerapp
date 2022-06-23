import { atom } from "recoil"

export const newListState = atom({
    key:'newListState',
    default:[]
})
export const revListState = atom({
    key:'revListState',
    default:[]
})
export const doneListState = atom({
    key:'doneListState',
    default:[]
})


// module.exports = {newListState,revListState,doneListState};