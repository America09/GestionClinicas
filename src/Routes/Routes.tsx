import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Home } from '../Pages/Home'
import { Pacientes } from '../Pages/Pacientes'
import { MainLayout } from '../Layout'
import  AgregarPacientes  from "../Components/CrudListaPacientes/Add";
import HistorialClinico from '../Components/HistoriaClinica/AddHistoria';
import ViewHistorial from '../Components/HistoriaClinica/ViewHistorial';

    const medicalHistory = {
      id: 1,
      date: '2023-01-01',
      diagnosis: 'Gripe',
      treatments: ['Reposo', 'Líquidos', 'Paracetamol']
    };
  
    const userInfo = {
      id: 1,
      name: 'Juan Pérez',
      age: 30
  
    };

export default function AppRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/lista-de-pacientes' element={<Pacientes/>}/>
                    <Route path='/Inicio' element={<h1>Inicio</h1>}/>
                    <Route path='/Doctor' element={<h1>Medicos</h1>}/>
                    <Route path='/agregar-paciente' element={<AgregarPacientes/>}/>
                    <Route path='/historial-clinico' element={<HistorialClinico/>}/>
                    <Route path="/historial" element={<ViewHistorial medicalHistory={medicalHistory} userInfo={userInfo} />} />
                </Route>
            </Routes>
        
        </BrowserRouter>
    )
}
