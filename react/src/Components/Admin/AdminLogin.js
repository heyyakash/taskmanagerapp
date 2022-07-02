import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


const AdminLogin = () => {
  const navigate = useNavigate();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(username,password)
    if (username==="admin" && password==="1234567"){
      navigate('/admin');
      return;
    }
    return console.log("Not verified");
  }

  return (
    <div className='bg-primary h-[100vh] grid place-items-center'>
      <div className='bg-white w-[500px] p-4 rounded-xl'>
        <h2 className='text-2xl font-semibold'>Task manager Admin Login</h2>

        <form>
          <div className="my-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input type="text " value = {username} onChange = {(e)=>setUsername(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="admin" required="" />
          </div>
          <div className="mb-6">
            <label htmlFor="password"  className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input type="password" value ={password} onChange = {(e)=>setPassword(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required="" />
          </div>
          <button type="submit" onClick={(e)=>handleSubmit(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      
      </div>
    </div>
  )
}

export default AdminLogin