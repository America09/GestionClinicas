import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; 

const ProtectedLayout = () => {
    const { authState } = useAuth();
    return authState.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedLayout;
