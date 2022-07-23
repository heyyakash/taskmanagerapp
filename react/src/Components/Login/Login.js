import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../UI/Alert';


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
        try {
            const url = `${process.env.REACT_APP_URL}/api/v1/login`;
            // const url = `http://localhost:5500/api/v1/login`;
            setDisabled(true);
            const res = await fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            username: uname,
                            password: pass
                        }
                    )
                })
            const data = await res.json();
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
        }
    }
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
 
    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center'>
            <Alert msg={msg} success={success} show={show} />
            <div className='p-8 bg-white flex flex-col lg:flex-row gap-2 rounded-xl'>
                <div className="p-2 max-w-[500px]">
                    <h2 className="text-2xl text-primary">Task Manager App</h2>
                    <p className="my-2 hidden lg:flex">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium optio non saepe adipisci hic nulla quia dicta expedita quas facilis dolore reprehenderit molestiae, earum, dolores ea ipsam voluptas. Non veniam corrupti molestias repellendus ea. Vero corrupti tenetur iusto deserunt dicta facere? Explicabo voluptatem minima quod debitis. Delectus ratione nesciunt dolore!</p>
                </div>
                <div className='bg-white drop-shadow-xl rounded-md p-[2rem] justify-center w-[300px]'>
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