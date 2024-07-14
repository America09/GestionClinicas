import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Public/Home';
import Login from '../Pages/Auth/Login';
import Dashboard from '../Pages/Public/Dashboard';
import AuthLayout from '../Layout/AuthLayout';
import PublicLayout from '../Layout/PublicLayout';
import Servicios from '../Pages/Public/Servicios';
import NotFound from '../Components/Public/NotFound';
import Citas from '../Pages/Public/Citas';
import Medicos from '../Pages/Public/Medicos';
import Terminoss from '../Pages/Public/Terminosy';
import Politicas from '../Pages/Public/Politicas';
import Nosotross from '../Pages/Public/Nosotros';
import Contacto from '../Pages/Public/Contacto';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/citas" element={<Citas />} />
                    <Route path="/medicos" element={<Medicos />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/terminos" element={<Terminoss />} />
                    <Route path="/politicas" element={<Politicas />} />
                    <Route path="/nosotros" element={<Nosotross />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
