import './App.css';
import Home from './Components/Homepage/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import CreateNew from './Components/Login/CreateNew';
import AdminDash from './Components/Admin/AdminDash';
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";


function App() { 
  const queryClient = new QueryClient;

  return (
    <>
    <QueryClientProvider client = {queryClient}>
      <Routes>
        <Route exact path="/admin" element={<AdminDash />} />
        <Route exact path="/create" element={<CreateNew />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="*" element={<Home />} />

      </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
