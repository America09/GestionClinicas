import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Pacientes } from '../Pages/Pacientes'
import { MainLayout } from '../Layout'
import { AgregarPacientes } from "../Components/CrudListaPacientes/Add";

export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/lista-de-pacientes' element={<Pacientes/>}/>
                    <Route path='/agregar-paciente' element={<AgregarPacientes/>}/>
                </Route>
            </Routes>
        
        </BrowserRouter>
    )
}