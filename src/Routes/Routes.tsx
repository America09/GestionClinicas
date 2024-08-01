import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Public/Home';
import Dashboard from '../Pages/Public/Dashboard';
import AuthLayout from '../Layout/AuthLayout';
import PublicLayout from '../Layout/PublicLayout';
import Servicios from '../Pages/Public/Servicios';
import { Error404 } from '../Pages/Public/Error404';
import Citas from '../Pages/Public/Citas';
import Medicos from '../Pages/Public/Medicos';
import Terminoss from '../Pages/Public/Terminosy';
import Politicas from '../Pages/Public/Politicas';
import Nosotross from '../Pages/Public/Nosotros';
import Contacto from '../Pages/Public/Contacto';
import { CrudMedico } from '../Pages/Public/Angel/CrudMedico';
import { CrudHorario } from '../Pages/Public/Jorge/CrudHorarios';
import { CrudConsultorio } from '../Pages/Public/Angel/CrudConsultorio';
import Confirma from '../Pages/Public/Confirma';
import { ConfirmarCOntraseña } from '../Pages/Public/ConfirmarCOntraseña';
import { AGConsultorios } from '../Pages/Public/Angel/AGConsultorios';
import { EditConsultorios } from '../Pages/Public/Angel/EditConsultorios';
import { AGMedicos } from '../Pages/Public/Angel/AGMedicos';
import { AGRoles } from '../Pages/Public/Angel/AGRoles';
import { AGCitas } from '../Pages/Public/Angel/AGCitas';
import { CrudCitas } from '../Pages/Public/Angel/CrudCitas';
import { CrudRoles } from '../Pages/Public/Angel/CrudRoles';
import { AsignarPermisos } from '../Pages/Public/Angel/AsignarPermisos';
import { EdiMed } from '../Pages/Public/Angel/EdiMed';
import EditarCitas from "../Pages/Public/Angel/EditCitas";
import { PacientesList } from '../Pages/Public/Katherine/ListPacientesPage';
import { AddPacientes } from '../Pages/Public/Katherine/AddPacientesPage';
import { HistorialClinicoPage } from '../Pages/Public/Katherine/HistorialPage';
import { CrudEspecialidad } from '../Pages/Public/Jorge/CrudEspecialidad';
import { AddEspecialidad } from '../Pages/Public/Jorge/AGEspecialidad';
import { AddHorario } from '../Pages/Public/Jorge/AGHorario';
import { EditHorario } from '../Pages/Public/Jorge/EditHorarioPage';
import { PermisosPage } from '../Pages/Public/Angel/PermisosPage';
import ResetPassword from '../Pages/Public/ResetPassword';
import ContactMessage from '../Components/ContactMessage';
import Unauthorized from '../Components/Unauthorized ';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/citas" element={<Citas />} />
                    <Route path="/medicos" element={<Medicos />} />
                    <Route path="/terminos" element={<Terminoss />} />
                    <Route path="/politicas" element={<Politicas />} />
                    <Route path="/nosotros" element={<Nosotross />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/confirma" element={<Confirma />} />
                    <Route path="/form" element={<ConfirmarCOntraseña />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/dashboard']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/editar-citas']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/editar-citas" element={<EditarCitas />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/admin-Listpacientes']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-Listpacientes" element={<PacientesList />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/admin-createHorarios']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-createHorarios" element={<AddHorario />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/contact-messages']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/contact-messages" element={<ContactMessage />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/admin-edithoario']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-edithoario" element={<EditHorario />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/admin-Addpacientes']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-Addpacientes" element={<AddPacientes/>} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/admin-createEspecialidad']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-createEspecialidad" element={<AddEspecialidad />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/admin-historial/:id']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-historial/:id" element={<HistorialClinicoPage />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/admin-especialidad']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-especialidad" element={<CrudEspecialidad />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/admin-consultorios']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-consultorios" element={<CrudConsultorio />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/admin-horarios']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-horarios" element={<CrudHorario />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/agregar-medicos']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/agregar-medicos" element={<AGMedicos />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/agregar-roles']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/agregar-roles" element={<AGRoles />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/agregar-citas']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/agregar-citas" element={<AGCitas />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/admin-roles']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-roles" element={<CrudRoles />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/admin-rolespermisos']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-rolespermisos" element={<PermisosPage />} />
                    </Route>
                </Route>
                <Route element={<ProtectedRoute requiredPermissions={['/editar-medicos']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/editar-medicos" element={<EdiMed />} />
                    </Route>
                </Route>

                <Route element={<ProtectedRoute requiredPermissions={['/agregar-consultorios']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/agregar-consultorios" element={<AGConsultorios />} />
                    </Route>
                </Route>

                <Route element={<ProtectedRoute requiredPermissions={['/editar-consultorios']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/editar-consultorios" element={<EditConsultorios />} />
                    </Route>
                </Route>

                <Route element={<ProtectedRoute requiredPermissions={['/admin-medicos']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-medicos" element={<CrudMedico />} />
                    </Route>
                </Route>

                <Route element={<ProtectedRoute requiredPermissions={['/admin-citas']} />}>
                    <Route element={<AuthLayout />}>
                        <Route path="/admin-citas" element={<CrudCitas />} />
                    </Route>
                </Route>

                
                <Route path="*" element={<Error404 />} />
                <Route element={<AuthLayout />}>
                    <Route path="/unauthorized" element={<Unauthorized />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
