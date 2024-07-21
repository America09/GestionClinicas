import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Public/Home';
// import Login from '../Pages/Auth/Login';
import Dashboard from '../Pages/Public/Dashboard';
import AuthLayout from '../Layout/AuthLayout';
import PublicLayout from '../Layout/PublicLayout';
import ProtectedLayout from '../Layout/ProtectedLayout';
import Servicios from '../Pages/Public/Servicios';
import { Error404 } from '../Pages/Public/Error404';
import Citas from '../Pages/Public/Citas';
import Medicos from '../Pages/Public/Medicos';
import Terminoss from '../Pages/Public/Terminosy';
import Politicas from '../Pages/Public/Politicas';
import Nosotross from '../Pages/Public/Nosotros';
import Contacto from '../Pages/Public/Contacto';
import { CrudMedico } from '../Pages/Public/Jorge/CrudMedico';
import { CrudHorario } from '../Pages/Public/Jorge/CrudHorarios';
import { CrudCitas } from '../Pages/Public/America/CrudCitas';
import { CrudConsultorio } from '../Pages/Public/Angel/CrudConsultorio';
import { CrudPacientes } from '../Pages/Public/Katherine/CrudPacientes';


import { CrudEspecialidad } from '../Pages/Public/Jorge/CrudEspecialidad';
import { AddEspecialidad } from '../Pages/Public/Jorge/AGEspecialidad';
import { AddHorario } from '../Pages/Public/Jorge/AGHorario';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/citas" element={<Citas />} />
                    <Route path="/medicos" element={<Medicos />} />
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="/terminos" element={<Terminoss />} />
                    <Route path="/politicas" element={<Politicas />} />
                    <Route path="/nosotros" element={<Nosotross />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Route>

                <Route element={<ProtectedLayout />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/admin-consultorios" element={<CrudConsultorio />} />
                        <Route path="/admin-medicos" element={<CrudMedico />} />
                        <Route path="/admin-horarios" element={<CrudHorario/>} />
                        <Route path="/admin-pacientes" element={<CrudPacientes />} />
                        <Route path="/admin-citas" element={<CrudCitas/>} />
                        <Route path="/admin-createHorarios" element={<AddHorario/>} />

                        <Route path="/admin-Especialidades" element={<CrudEspecialidad/>} />

                        <Route path="/admin-createEspecialidad" element={<AddEspecialidad/>} />

                    </Route>
                </Route>
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
