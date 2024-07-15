import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const handleEdit = (id: number) => {
    console.log(`Edit row with id: ${id}`);
};

const handleDelete = (id: number) => {
    console.log(`Delete row with id: ${id}`);
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nombre', headerName: 'Nombre de la Especialidad', width: 300 },
    { field: 'descripcion', headerName: 'Descripción', width: 400 },
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
    { id: 1, nombre: 'Cardiología', descripcion: 'Especialidad médica que se ocupa del estudio, diagnóstico y tratamiento de las enfermedades del corazón.' },
    { id: 2, nombre: 'Dermatología', descripcion: 'Rama de la medicina que se ocupa del conocimiento de la piel humana y de las enfermedades que la afectan.' },
    { id: 3, nombre: 'Neurología', descripcion: 'Especialidad médica que trata los trastornos del sistema nervioso.' },
    { id: 4, nombre: 'Pediatría', descripcion: 'Especialidad de la medicina dedicada a la salud y enfermedades de los niños.' },
    { id: 5, nombre: 'Psiquiatría', descripcion: 'Rama de la medicina que se ocupa del estudio, diagnóstico y tratamiento de los trastornos mentales.' },
];

export const ListEspecialidades: React.FC = () => {
    return (
        <Box
            sx={{
                width: '100%',
                flexGrow: 1,
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
                Lista de Especialidades
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
