import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../UI/Alert';
import {loginUser} from '../../hooks';

const Login = () => {
    const [disabled, setDisabled] = useState(false);
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        try {
            const data =await loginUser(uname,pass)
            if (data.success) {
                localStorage.setItem('token', data.authToken);
                setDisabled(false);
                navigate('/');
            }
            else {
                setSuccess(false);
                setMsg(data.msg);
                setShow(true);
                setDisabled(false);
                setTimeout(() => {
                    setShow(false);
                    setSuccess(false);
                    setMsg("");
                }, 2000);

            }
        }
        catch (err) {
            console.log(err)
            setDisabled(false)
        }
    }
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
 
    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center'>
            <Alert msg={msg} success={success} show={show} />
            <div className='p-8 bg-white/50 h-full lg:h-auto lg:bg-white backdrop-blur-md justify-center items-center flex flex-col lg:flex-row gap-2 rounded-xl'>
                <div className="p-2 max-w-[500px]">
                    <h2 className="text-2xl text-primary">Task Manager App</h2>
                    <p className="my-2 lg:flex">
                        Task Manager is Team management tool where tasks can be assigned and updated. Team members can also use this as a personal task management tool. 
                    </p>
                </div>
                <div className='bg-white drop-shadow-xl lg:drop-shadow-none  rounded-md p-[2rem] justify-center w-[300px]'>
                    <form className='flex flex-col justify-center items-start gap-3 '>
                        <h2 className = 'text-xl'>Sign In</h2>
                        Username: <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} className="bg-secondary w-full h-[30px] outline-primary px-2" />
                        Password: <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="bg-secondary w-full h-[30px] outline-primary px-2" />
                        <div className="flex gap-2 mt-2">
                            <button onClick={handleSubmit} disabled={uname.length === 0 || pass.length === 0 || disabled} className="disabled:cursor-not-allowed disabled:opacity-60 bg-primary transition-all duration-150 text-white py-1 px-2 hover:text-primary hover:bg-white cursor-pointer rounded-sm" type="submit">Sign In</button>
                            <button onClick={() => navigate('/create')} className="bg-secondary transition-all duration-150 text-primary py-1 px-2 hover:text-secondary hover:bg-primary cursor-pointer rounded-sm">Sign Up</button>
                            
                        </div>
                        {/* <button onClick={(e)=> handleAdminLogin(e)} className="bg-secondary transition-all duration-150 text-primary py-1 px-2 hover:text-secondary hover:bg-primary cursor-pointer rounded-sm">Admin Login</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login