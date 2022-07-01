import './App.css';
import { useEffect } from 'react';
import Home from './Components/Homepage/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import { useNavigate } from 'react-router-dom';
import CreateNew from './Components/Login/CreateNew';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminDash from './Components/Admin/AdminDash';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login')
    }
    else {
      navigate('/');
    }


  }, [])
  return (
    <>
      <Routes>
        <Route exact path="/admin" element={<AdminDash />} />
        <Route exact path="/create" element={<CreateNew />} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/adminlogin" element={<AdminLogin />} /> */}
        <Route exact path="*" element={<Home />} />

      </Routes>

    </>
  );
}

export default App;
