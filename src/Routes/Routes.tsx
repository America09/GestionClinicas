import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Public/Home';
import Login from '../Pages/Auth/Login';
import Dashboard from '../Pages/Public/Dashboard';
import AuthLayout from '../Layout/AuthLayout';
import PublicLayout from '../Layout/PublicLayout';
import HorarioPage from '../Pages/Auth/HorarioPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/horario" element={<HorarioPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
