import React from 'react';
import { Route, Routes } from "react-router-dom";
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import { Toaster } from "react-hot-toast";
import ProtectedRoute from './components/auth/ProtectedRoute';
const Dashboard = React.lazy(() => import('./components/Dashboard'));

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
