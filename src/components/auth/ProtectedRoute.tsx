import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps{
    requireAuth:boolean;
    redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({requireAuth,redirectPath}) => {
    const token=localStorage.getItem('token');
    if (requireAuth && !token) {
        return <Navigate to={redirectPath || 'login'} replace />;
    }
    if(!requireAuth && token){
        return <Navigate to={redirectPath || '/'} replace />;
    }
    return <Outlet />;
};

export default ProtectedRoute;