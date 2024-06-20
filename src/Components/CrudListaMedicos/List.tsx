import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'Nombre', headerName: 'Nombre', width: 150, editable: true },
    { field: 'Apellido', headerName: 'Apellido', width: 150, editable: true },
    { field: 'Disponibilidad', headerName: 'Disponibilidad', width: 150, editable: true },
    { field: 'Status', headerName: 'Status', width: 110, editable: true },
    { field: 'Habilidades', headerName: 'Habilidades', width: 200, editable: true },
    { field: 'Acciones', headerName: 'Acciones', width: 150, editable: true, sortable: false },
];

const rows = [
    { id: 1, Nombre: 'Ana', Apellido: 'García', Disponibilidad: 'Full-time', Status: 'Active', Habilidades: 'Cardiology', Acciones: 'Edit' },
    { id: 2, Nombre: 'Luis', Apellido: 'Martínez', Disponibilidad: 'Part-time', Status: 'Inactive', Habilidades: 'Pediatrics', Acciones: 'Edit' },
    { id: 3, Nombre: 'María', Apellido: 'López', Disponibilidad: 'Full-time', Status: 'Active', Habilidades: 'Neurology', Acciones: 'Edit' },
    { id: 4, Nombre: 'Carlos', Apellido: 'Hernández', Disponibilidad: 'Full-time', Status: 'Active', Habilidades: 'Orthopedics', Acciones: 'Edit' },
    { id: 5, Nombre: 'Sofía', Apellido: 'González', Disponibilidad: 'Full-time', Status: 'Active', Habilidades: 'Dermatology', Acciones: 'Edit' },
    { id: 6, Nombre: 'Miguel', Apellido: 'Rodríguez', Disponibilidad: 'Part-time', Status: 'Active', Habilidades: 'Radiology', Acciones: 'Edit' },
    { id: 7, Nombre: 'Lucía', Apellido: 'Fernández', Disponibilidad: 'Full-time', Status: 'Inactive', Habilidades: 'Oncology', Acciones: 'Edit' },
    { id: 8, Nombre: 'David', Apellido: 'Pérez', Disponibilidad: 'Part-time', Status: 'Inactive', Habilidades: 'General Surgery', Acciones: 'Edit' },
    { id: 9, Nombre: 'Elena', Apellido: 'Gómez', Disponibilidad: 'Full-time', Status: 'Active', Habilidades: 'Gynecology', Acciones: 'Edit' },
];

export const ListMedicos = () => {
    return (
        <Box sx={{ width: '100%' }}>
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
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
};
