
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const token = localStorage.getItem('token');
    return token !== null;
};

const ProtectedLayout = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedLayout;
