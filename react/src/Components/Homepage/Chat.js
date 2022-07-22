import React from 'react';
import { useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { userData } from '../../Atom/userState';
import { useRecoilValue } from 'recoil';
import ChatBody from '../Chat/ChatBody';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../UI/SearchBox';
import { useQuery } from 'react-query';
import { getUser } from '../../hooks';
const Chat = () => {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const {data:user} = useQuery('user',getUser,{
        onSuccess:()=>navigate('/chat')
    });
    

    const handleSend = async (e) => {
        e.preventDefault();
        try {
            const username = user.payload.username;
            const uid = user.payload._id
            const url = `http://localhost:5500/api/v1/chat/sendchat`;
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text, uid, username })
            })
            const data = await res.json();
            if (data.success) {
                console.log("done");
                setText("")
            }

        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <div className='flex flex-[1] h-full flex-col gap-6 bg-white lg:bg-opacity-[.95] lg:backdrop-blur-2xl'>
                <SearchBox heading="Chats" />
                <h1 className='text-gray-700 text-4xl font-[600] px-8 mt-2'>Recent Chats</h1>
                <ChatBody />
                <div className='flex gap-2 mt-auto py-4 px-6 bg-white'>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='w-full h-[40px] outline-none p-2 rounded-2xl' placeholder='Write Something' />
                    <button onClick={(e) => handleSend(e)} disabled={text.length === 0 ? true : false} className="rounded-full bg-primary h-10 w-10 text-2xl text-secondary grid place-items-center cursor-pointer hover:text-primary hover:bg-secondary main-transition disabled:opacity-40 disabled:cursor-not-allowed "><BiSend /></button>
                </div>
            </div>
        </>
    )
}

export default Chat;