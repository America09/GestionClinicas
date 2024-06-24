import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'clinicaConsultorio', headerName: 'Clínica o consultorio', width: 200 },
    { field: 'medico', headerName: 'Médico', width: 150 },
    { field: 'fecha', headerName: 'Fecha', width: 150 },
    { field: 'turno', headerName: 'Turno', width: 150 },
    { field: 'entrada', headerName: 'Entrada', width: 150 },
    { field: 'salida', headerName: 'Salida', width: 150 },
    {
        field: 'edit',
        headerName: 'Editar',
        width: 100,
        renderCell: (params) => (
            <IconButton color="primary" onClick={() => handleEdit(params.row.id)}>
                <EditIcon />
            </IconButton>
        ),
    },
    {
        field: 'delete',
        headerName: 'Eliminar',
        width: 100,
        renderCell: (params) => (
            <IconButton color="secondary" onClick={() => handleDelete(params.row.id)}>
                <DeleteIcon />
            </IconButton>
        ),
    },
];

const rows = [
    { id: 1, clinicaConsultorio: 'Clínica A', medico: 'Dr. Ana García', fecha: '2023-06-19', turno: 'Matutino', entrada: '08:00', salida: '12:00' },
    { id: 2, clinicaConsultorio: 'Consultorio B', medico: 'Dr. Luis Martínez', fecha: '2023-06-20', turno: 'Vespertino', entrada: '13:00', salida: '17:00' },
    { id: 7, clinicaConsultorio: 'Clínica G', medico: 'Dra. Lucía Fernández', fecha: '2023-06-25', turno: 'Matutino', entrada: '08:00', salida: '12:00' },
    { id: 8, clinicaConsultorio: 'Consultorio H', medico: 'Dr. David Pérez', fecha: '2023-06-26', turno: 'Vespertino', entrada: '13:00', salida: '17:00' },
    { id: 9, clinicaConsultorio: 'Clínica I', medico: 'Dra. Elena Gómez', fecha: '2023-06-27', turno: 'Matutino', entrada: '08:00', salida: '12:00' },
];

const handleEdit = (id: number) => {
    console.log(`Edit row with id: ${id}`);
};

const handleDelete = (id: number) => {
    console.log(`Delete row with id: ${id}`);
};

export const ListHorarios: React.FC = () => {
    return (
        <Box
            sx={{
                width: '100%',
                '& .MuiDataGrid-root': {
                    border: 'none',
                    borderRadius: '12px',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                },
                '& .MuiDataGrid-cell': {
                    borderBottom: '1px solid #e0e0e0',
                },
                '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: '#f5f5f5',
                    borderBottom: '1px solid #e0e0e0',
                },
                '& .MuiDataGrid-footerContainer': {
                    borderTop: '1px solid #e0e0e0',
                    backgroundColor: '#f5f5f5',
                },
            }}
        >
            <Typography variant="h4" gutterBottom align="center">
                Lista de Horarios
            </Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                pageSize={5}
                disableSelectionOnClick
            />
        </Box>
    );
};
