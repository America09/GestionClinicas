import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Public/Home';
import Login from '../Pages/Auth/Login';
import Dashboard from '../Pages/Public/Dashboard';
import AuthLayout from '../Layout/AuthLayout';
import PublicLayout from '../Layout/PublicLayout';
import HorarioPage from '../Pages/Auth/HorarioPage';
import { AgregarHorario } from '../Components/Auth/CrudListaHorarios/AgregarHorario';
import EspecialidadPage from '../Pages/Auth/EspecialidadPage';
import { AgregarEspecialidad } from '../Components/Auth/CrudListaEspecialidades/AgregarEspecialidades';

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
                    <Route path="/Horario" element={<HorarioPage/>} />
                    <Route path="/AgregarHorario" element={<AgregarHorario/>} />
                    <Route path="/Especialidad" element={<EspecialidadPage/>} />
                    <Route path="/AgregarEspecialidad" element={<AgregarEspecialidad/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
