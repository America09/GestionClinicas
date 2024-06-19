
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'
import { ListMedicos } from "../Components/CrudListaMedicos/List";

export const Medicos = () => {
    const navigate = useNavigate()
    return (
        <>
            <h2>Lista de Medicos</h2>
            <Button color="primary" onClick={()=> navigate("/agregar-medicos")} > + Añadir medico</Button>
            <ListMedicos/>
        </>
    )
}