import React from 'react'
import { userData } from '../../Atom/userState'
import { useRecoilValue } from 'recoil'
import { useState, useEffect } from 'react';
import Pusher from 'pusher-js/worker';
import { useQuery } from 'react-query';
import { getUser } from '../../hooks';
import { type } from '@testing-library/user-event/dist/type';

const ChatBody = () => {
    const { data: user } = useQuery('user', getUser);

    const { _id } = user.payload;
    const getChat = async () => {
        const url = `http://localhost:5500/api/v1/chat/sendchat`;
        const res = await fetch(url, {
            method: "GET"
        })
        const data = await res.json();
        return data;
    }

    const { isLoading, error, data } = useQuery('chats', getChat);

    useEffect(() => {
        const pusher = new Pusher('27a83897dec9719635bf', {
            cluster: 'ap2'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (msg) => {
            // alert(JSON.stringify(msg))
            console.log(typeof msg,msg)
            // data.push(newMsg);
            // console.log('appended',data)
        });

    }, [])





 
    console.log(data)

    if (isLoading) {
        return <div>Loading</div>
    }
    if (error) {
        return <div>error</div>
    }
    return (
        user &&
        <>
            <div className='w-full overflow-auto flex-[1] px-8  py-4'>
                {data?.map((chat) =>
                    <div key={chat._id} className={`${chat.uid === _id ? "float-right bg-white text-primary" : "float-left bg-primary text-white"} flex flex-col  my-2 p-2 rounded-lg clear-both`}>
                        <div className=''><h5 className='text-[.7rem]'>@{chat.username}</h5></div>
                        <p>{chat.text}</p>
                    </div>
                )
                }

            </div>
        </>
    )







}

export default ChatBody;