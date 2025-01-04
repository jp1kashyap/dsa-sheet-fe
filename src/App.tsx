import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import { Toaster } from "react-hot-toast";
import Dashboard from './components/Dashboard';

function App() {
  const token=localStorage.getItem('token');
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/dashboard' element={<Dashboard />} />
        
      </Routes>
      <Toaster />
    </>
  )
}

export default App;
