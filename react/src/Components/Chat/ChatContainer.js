import React from 'react';
import { useState } from 'react';
import {BiSend} from 'react-icons/bi';
import { userData } from '../../Atom/userState';
import { useRecoilValue } from 'recoil';
import ChatBody from './ChatBody';


const ChatContainer = () => {
  const user = useRecoilValue(userData);

  const [text,setText] = useState("");

  const handleSend = async(e) => {
    e.preventDefault();
    try{
      const username = user.payload.username
      const uid = user.payload._id
      const url = `http://localhost:5500/api/v1/chat/sendchat`;
      const res = await fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({text,uid,username})
      })
      const data = await res.json();
      if (data.success){
        console.log("done");
        setText("");
      }

    }
    catch(err){
      console.log(err)
    }
  }
  
  
  return (
    <div className='flex-[1] flex flex-col px-2'>
        <h2 className='text-2xl font-semibold text-primary'>Live Chat</h2>
        <ChatBody />
        <div className='flex gap-2'>
            <input type="text" value = {text} onChange = {(e)=>setText(e.target.value)} className='w-full bg-secondary h-[40px] outline-none p-2 rounded-2xl' placeholder='Write Something' />
            <button onClick = {(e)=>handleSend(e)} disabled = {text.length===0?true:false} className="rounded-full bg-primary h-10 w-10 text-2xl text-secondary grid place-items-center cursor-pointer hover:text-primary hover:bg-secondary main-transition disabled:opacity-40 disabled:cursor-not-allowed "><BiSend /></button>
        </div>
    </div>
  )
}

export default ChatContainer