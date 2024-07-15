import React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'Status', headerName: 'Status', width: 110, editable: true },
    { field: 'Disponibilidad', headerName: 'Disponibilidad', width: 150, editable: true },
    { field: 'Consultorio', headerName: 'Consultorio', width: 150, editable: true },
    {
        field: 'Editar',
        headerName: 'Editar',
        width: 100,
        sortable: false,
        renderCell: (params) => (
            <GridActionsCellItem
                icon={<EditIcon />}
                label="Edit"
                onClick={() => handleEdit(params.id)}
            />
        ),
    },
    {
        field: 'Eliminar',
        headerName: 'Eliminar',
        width: 100,
        sortable: false,
        renderCell: (params) => (
            <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Delete"
                onClick={() => handleDelete(params.id)}
            />
        ),
    },
];

const rows = [
    { id: 1, Status: 'Disponible', Disponibilidad: 'Consultorio 1', Consultorio: 'Cardiology' },
    { id: 2, Status: 'No disponible', Disponibilidad: 'Consultorio 2', Consultorio: 'Pediatrics' },
    { id: 3, Status: 'Disponible', Disponibilidad: 'Consultorio 3', Consultorio: 'Neurology' },
    { id: 4, Status: 'Disponible', Disponibilidad: 'Consultorio 4', Consultorio: 'Orthopedics' },
    { id: 5, Status: 'Disponible', Disponibilidad: 'Consultorio 5', Consultorio: 'Dermatology' },
    { id: 6, Status: 'No disponible', Disponibilidad: 'Consultorio 6', Consultorio: 'Radiology' },
    { id: 7, Status: 'Disponible', Disponibilidad: 'Consultorio 7', Consultorio: 'Oncology' },
    { id: 8, Status: 'No disponible', Disponibilidad: 'Consultorio 8', Consultorio: 'General Surgery' },
    { id: 9, Status: 'Disponible', Disponibilidad: 'Consultorio 9', Consultorio: 'Gynecology' },
];

const handleEdit = (id) => {
    // Implementa aquí la lógica de edición
    console.log('Editar fila con ID:', id);
};

const handleDelete = (id) => {
    // Implementa aquí la lógica de eliminación
    console.log('Eliminar fila con ID:', id);
};

export const ListConsultorios = () => {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
            <Box sx={{ width: '55%' }}> {/* Ajusta el valor de width para cambiar el ancho de la tabla */}
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableSelectionOnClick
                />
            </Box>
        </Box>
    );
};
