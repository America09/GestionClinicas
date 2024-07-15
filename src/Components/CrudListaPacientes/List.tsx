import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton, Container, Typography, Box } from '@mui/material';
import { Edit, Delete, Description } from '@mui/icons-material';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'

interface Patient {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  bloodGroup: string;
  occupation: string;
  maritalStatus: string;
  address: string;
  gender: string;
  avatar: string;
}

const patients: Patient[] = [
  {
    id: 1,
    name: 'Karthi',
    surname: 'Kumar',
    email: 'karthi@gmmail.com',
    phone: '7305477760',
    bloodGroup: 'O+',
    occupation: 'Engineer',
    maritalStatus: 'Single',
    address: '123 Main St',
    gender: 'Male',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 2,
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    bloodGroup: 'A-',
    occupation: 'Teacher',
    maritalStatus: 'Married',
    address: '456 Elm St',
    gender: 'Male',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: 3,
    name: 'Jane',
    surname: 'Smith',
    email: 'jane.smith@example.com',
    phone: '9876543210',
    bloodGroup: 'B+',
    occupation: 'Doctor',
    maritalStatus: 'Single',
    address: '789 Oak St',
    gender: 'Female',
    avatar: 'https://via.placeholder.com/40',
  },
  // Agrega más pacientes aquí si es necesario
];

const ListaPacientes: React.FC = () => {
    const navigate = useNavigate()
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', px: 3 }}>
      <Box sx={{ flexGrow: 1, mt: 2 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Lista de pacientes
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2">
            Lista de pacientes
          </Typography>
          <Typography variant="h6" component="a" href="#" color="primary">
          <Button color="primary" onClick={()=> navigate("/agregar-paciente")} > Añadir paciente</Button>
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>Num. Teléfono</TableCell>
                <TableCell>Grupo Sanguíneo</TableCell>
                <TableCell>Ocupación</TableCell>
                <TableCell>Estado Civil</TableCell>
                <TableCell>Dirección</TableCell>
                <TableCell>Género</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Avatar alt={patient.name} src={patient.avatar} sx={{ mr: 2 }} />
                      {patient.name}
                    </Box>
                  </TableCell>
                  <TableCell>{patient.surname}</TableCell>
                  <TableCell>{patient.email}</TableCell>
                  <TableCell>{patient.phone}</TableCell>
                  <TableCell>{patient.bloodGroup}</TableCell>
                  <TableCell>{patient.occupation}</TableCell>
                  <TableCell>{patient.maritalStatus}</TableCell>
                  <TableCell>{patient.address}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>
                    <IconButton aria-label="view" href="historial">
                      <Description />
                    </IconButton>
                    <IconButton aria-label="edit">
                      <Edit />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="flex-end" sx={{ mt: 3 }}>
          <Pagination count={10} page={1} />
        </Box>
      </Box>
    </Box>
  );
};

export default ListaPacientes;
