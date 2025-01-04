import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return(
    <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
    </Routes>
)
}

export default App;
