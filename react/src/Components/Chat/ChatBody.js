import React from 'react'
import { userData } from '../../Atom/userState'
import { useRecoilValue } from 'recoil'
import { useState,useEffect } from 'react'

const ChatBody = () => {
    
    return (
        <div className='w-full flex-1 py-4 '>
            <div className="float-left msg clear-both">Hello this is message</div>
            <div className="float-right msg clear-both">Hello this is message</div>
        </div>
    )
}

export default ChatBody