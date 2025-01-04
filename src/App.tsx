import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import { Toaster } from "react-hot-toast";
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute requireAuth={false} redirectPath='/'/> }  >
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
        </Route>
        <Route element={<ProtectedRoute requireAuth={true} redirectPath='/login'/> }  >
          <Route path='/' element={<Dashboard />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App;
