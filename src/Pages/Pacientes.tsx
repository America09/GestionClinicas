
import  ListPacientes  from "../Components/CrudListaPacientes/List";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'

export const Pacientes = () => {
    const navigate = useNavigate()
    return (
        <>
            {/* <h2>Lista de pacientes</h2>
            <Button color="primary" onClick={()=> navigate("/agregar-paciente")} > + Añadir paciente</Button> */}
            <ListPacientes/>
        </>
    )
}