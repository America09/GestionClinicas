import React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'Nombre', headerName: 'Nombre', width: 150, editable: true },
    { field: 'Apellido', headerName: 'Apellido', width: 150, editable: true },
    { field: 'Disponibilidad', headerName: 'Disponibilidad', width: 150, editable: true },
    { field: 'Status', headerName: 'Status', width: 110, editable: true },
    { field: 'Habilidades', headerName: 'Habilidades', width: 200, editable: true },
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
    { id: 1, Nombre: 'Ana', Apellido: 'García', Disponibilidad: 'Full-time', Status: 'Active', Habilidades: 'Cardiology' },
    { id: 2, Nombre: 'Luis', Apellido: 'Martínez', Disponibilidad: 'Part-time', Status: 'Inactive', Habilidades: 'Pediatrics' },
    { id: 3, Nombre: 'María', Apellido: 'López', Disponibilidad: 'Full-time', Status: 'Active', Habilidades: 'Neurology' },
    { id: 4, Nombre: 'Carlos', Apellido: 'Hernández', Disponibilidad: 'Full-time', Status: 'Active', Habilidades: 'Orthopedics' },
    { id: 5, Nombre: 'Sofía', Apellido: 'González', Disponibilidad: 'Full-time', Status: 'Active', Habilidades: 'Dermatology' },
    { id: 6, Nombre: 'Miguel', Apellido: 'Rodríguez', Disponibilidad: 'Part-time', Status: 'Active', Habilidades: 'Radiology' },
    { id: 7, Nombre: 'Lucía', Apellido: 'Fernández', Disponibilidad: 'Full-time', Status: 'Inactive', Habilidades: 'Oncology' },
    { id: 8, Nombre: 'David', Apellido: 'Pérez', Disponibilidad: 'Part-time', Status: 'Inactive', Habilidades: 'General Surgery' },
    { id: 9, Nombre: 'Elena', Apellido: 'Gómez', Disponibilidad: 'Full-time', Status: 'Active', Habilidades: 'Gynecology' },
];

const handleEdit = (id) => {
    // Aquí puedes implementar la lógica de edición
    console.log('Edit row with id:', id);
};

const handleDelete = (id) => {
    // Aquí puedes implementar la lógica de eliminación
    console.log('Delete row with id:', id);
};

export const ListMedicos = () => {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
            <Box sx={{ width: '80%' }}>
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
