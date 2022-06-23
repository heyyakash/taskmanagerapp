import { atom } from "recoil"

export const fetchUrl = atom({
    key:'url',
    default:process.env.REACT_APP_URL
})