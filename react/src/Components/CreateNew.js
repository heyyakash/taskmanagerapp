import React from 'react'
import { useState,useEffect } from 'react';
import Alert from './Alert';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const CreateNew = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState("");
    const [color,setColor] = useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();
        const url = "http://localhost:5500/api/v1/createuser";
        try{
            const res = await fetch(url,
                {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(
                        {
                            firstname:fname,
                            lastname:lname,
                            username:uname,
                            password:pass
                        }
                    )
                })
            const data = await res.json();
            setFname("");
            setLname("");
            setUname("");
            setPass("");
            setColor(data.color);
            setMsg(data.msg);
            setShow(true);
            setTimeout(() => {
                setShow(false);
                setColor("");
                setMsg("");
            }, 2000);
        }
        catch(err){
            console.log(err)
        }
    }
    const [uname,setUname] = useState("");
    const [pass,setPass] = useState("");
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");

    return (
        <div className=' w-[100%] h-[100vh] fixed bg-primary flex justify-center items-center'>
            <Alert msg = {msg} color = {color} show = {show} />   
            <div className='bg-white drop-shadow-2xl rounded-md p-[2rem] justify-center w-[300px]'>
            <form className='flex flex-col justify-center items-start gap-3 '>
                
                First Name: <input type="text" value = {fname} onChange = {(e)=>setFname(e.target.value)} className = "bg-secondary w-full h-[30px] outline-primary px-2" />
                Last Name: <input type="text" value = {lname} onChange = {(e)=>setLname(e.target.value)} className = "bg-secondary w-full h-[30px] outline-primary px-2" />
                Username: <input type="text" value = {uname} onChange = {(e)=>setUname(e.target.value)} className = "bg-secondary w-full h-[30px] outline-primary px-2" />
                Password: <input type="password" value = {pass} onChange = {(e)=>setPass(e.target.value)} className = "bg-secondary w-full h-[30px] outline-primary px-2" />
                <div className="flex gap-2 mt-2">
                <button onClick={handleSubmit} className = "bg-primary transition-all duration-150 text-white py-1 px-2 hover:text-primary hover:bg-white cursor-pointer rounded-sm" type = "submit">Create User</button>
                <button onClick={()=>navigate('/login')} className = "bg-secondary transition-all duration-150 text-primary py-1 px-2 hover:text-secondary hover:bg-primary cursor-pointer rounded-sm">Sign In</button>
                </div>
                
            </form>
            </div>
            
        </div>
    )
}

export default CreateNew;