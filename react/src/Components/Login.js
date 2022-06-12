import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';


const Login = () => {
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem('token');
      if(token){
          navigate('/');
      }
    }, [])
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        
       
        const url = `${process.env.REACT_APP_URL}/api/v1/login`;
        try{
            const res = await fetch(url,
                {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(
                        {
                            username:uname,
                            password:pass
                        }
                    )
                })
            const data = await res.json();
            if(data.success){
                localStorage.setItem('token',data.authToken);
                navigate('/');
            }
            else{
                setSuccess(false);
                setMsg(data.msg);
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                    setSuccess(false);
                    setMsg("");
                }, 2000);
                
            }
        }
        catch(err){
            console.log(err)
        }
    }
    const [uname,setUname] = useState("");
    const [pass,setPass] = useState("");

    return (
        <div className='w-[100%] h-[100vh] fixed bg-primary flex justify-center items-center'>
            <Alert msg={msg} success = {success} show={show} />
            <div className='bg-white drop-shadow-2xl rounded-md p-[2rem] justify-center w-[300px]'>
            <form className='flex flex-col justify-center items-start gap-3 '>
                Username: <input type="text" value = {uname} onChange = {(e)=>setUname(e.target.value)} className = "bg-secondary w-full h-[30px] outline-primary px-2" />
                Password: <input type="password" value = {pass} onChange = {(e)=>setPass(e.target.value)} className = "bg-secondary w-full h-[30px] outline-primary px-2" />
                <div className="flex gap-2 mt-2">
                <button onClick={handleSubmit} disabled = {uname.length===0 || pass.length===0} className = "disabled:cursor-not-allowed disabled:opacity-60 bg-primary transition-all duration-150 text-white py-1 px-2 hover:text-primary hover:bg-white cursor-pointer rounded-sm" type = "submit">Sign In</button>
                <button onClick={()=>navigate('/create')} className = "bg-secondary transition-all duration-150 text-primary py-1 px-2 hover:text-secondary hover:bg-primary cursor-pointer rounded-sm">Sign Up</button>
                </div>
                
            </form>
            </div>
            
        </div>
    )
}

export default Login