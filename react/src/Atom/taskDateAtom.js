import { atom } from "recoil"

export const dateState = atom({
    key:'taskDate',
    default:(new Date()).toISOString().split('T')[0]
})