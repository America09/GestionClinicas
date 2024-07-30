import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

interface ProtectedRouteProps {
    requiredPermissions: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredPermissions }) => {
    const { authState } = useAuth();
    const hasPermission = requiredPermissions.every((perm) => authState.permissions.includes(perm));

    if (!authState.isAuthenticated) {
        return <Navigate to="/" />;
    }

    return hasPermission ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
