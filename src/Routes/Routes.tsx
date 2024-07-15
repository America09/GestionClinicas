import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Pacientes } from '../Pages/Pacientes'
import { Medicos } from '../Pages/Medicos';
import { Consultorios } from '../Pages/Consultorios'


import { MainLayout } from '../Layout'
import { AgregarMedicos } from '../Components/CrudListaMedicos/Add';
import { AgregarPacientes } from '../Components/CrudListaPacientes/Add';
import { AgregarConsultorios } from '../Components/CrudListaConsultorio/Add';

export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/lista-de-pacientes' element={<Pacientes/>}/>

                    <Route path='/lista-de-consultorios' element={<Consultorios/>}/>
                    <Route path='/lista-de-medicos' element={<Medicos/>}/>

                    <Route path='/agregar-pacientes' element={<AgregarPacientes/>}/>

                    <Route path='/agregar-consultorios' element={<AgregarConsultorios/>}/>
                    <Route path='/agregar-medico' element={<AgregarMedicos/>}/>

                    <Route path='/Inicio' element={<h1>Inicio</h1>}/>
                </Route>
            </Routes>
        
        </BrowserRouter>
    )
}
