import './App.css';
import { useEffect } from 'react';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import { useNavigate } from 'react-router-dom';
import CreateNew from './Components/CreateNew';
import Center from './Components/Center';

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
        <Route exact path = "/create" element = {<CreateNew />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="*" element={<Home />} />
      </Routes>

    </>
  );
}

export default App;
