import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Pacientes } from '../Pages/Pacientes'
import { MainLayout } from '../Layout'
import { Medicos } from '../Pages/Medicos';
import { AgregarMedicos } from '../Components/CrudListaMedicos/Add';

export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/lista-de-pacientes' element={<Pacientes/>}/>
                    <Route path='/lista-de-medicos' element={<Medicos/>}/>
                    <Route path='/Inicio' element={<h1>Inicio</h1>}/>
                    <Route path='/agregar-medico' element={<AgregarMedicos/>}/>

                </Route>
            </Routes>
        
        </BrowserRouter>
    )
}
