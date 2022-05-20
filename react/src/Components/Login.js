import React from 'react'
import { useState,useEffect } from 'react';
import Home from './Home';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem('token');
      if(token){
          navigate('/')
      }
    }, [])
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const url = "http://localhost:5500/api/v1/login";
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
            localStorage.setItem('token',data);
            navigate('/')
            // if(data.success){
            //     localStorage.setItem('token',data);
            //     navigate('/');
            // }
            // else{
            //     console.log('unauthorized')
            // }
            
            // console.log({uname,pass})
        }
        catch(err){
            console.log(err)
        }
    }
    const [uname,setUname] = useState("");
    const [pass,setPass] = useState("");

    return (
        <div className='w-[100%] h-[100vh] fixed bg-white flex justify-center items-center'>
            <form>
                Username: <input type="text" value = {uname} onChange = {(e)=>setUname(e.target.value)} />
                Password: <input type="password" value = {pass} onChange = {(e)=>setPass(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login