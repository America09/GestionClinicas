import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Pacientes } from '../Pages/Pacientes'
import { MainLayout } from '../Layout'
import { AgregarMedicos } from "../Components/CrudListaMedicos/Add";
import { Medicos } from '../Pages/Medicos';

export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/lista-de-pacientes' element={<Pacientes/>}/>
                    <Route path='/inicio' element={<Home/>}/>
                    <Route path='/lista-de-medicos' element={<Medicos/>}/>
                    <Route path='/agregar-medicos' element={<AgregarMedicos/>}/>
                </Route>
            </Routes>
        
        </BrowserRouter>
    )
}