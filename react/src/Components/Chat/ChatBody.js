import React from 'react'
import { userData } from '../../Atom/userState'
import { useRecoilValue } from 'recoil'
import { useState,useEffect } from 'react';
import Pusher from 'pusher-js/worker';

const ChatBody = () => {

    const [data,setData] = useState();
    const user = useRecoilValue(userData);
    const id = user.payload._id
    useEffect(()=>{
        getChat();
    },[])


    useEffect(() => {
    const pusher = new Pusher('27a83897dec9719635bf', {
      cluster: 'ap2'
    });
  
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (msg) => {
    // setData([...data,msg]);
    getChat();
    });
  
  }, [data])
  


    const getChat = async() => {
        try{
            const url =`http://localhost:5500/api/v1/chat/sendchat`;
            const res = await fetch(url,{
                method:"GET"
            })
            const data =await res.json();
            setData(data);
        }
        catch(err){
            console.log(err)
        }
    }
    
    return (

        <div className='w-full overflow-auto flex-1 py-4  '>
            {data?.map((chat)=> <div key = {chat._id} className={`float-${chat.uid===id?"right mr-2":"left"}  my-2 msg clear-both`}>{chat.text}</div>)}
            
            {/* <div className="float-right msg clear-both">Hello this is message</div> */}
        </div>
    )
}

export default ChatBody