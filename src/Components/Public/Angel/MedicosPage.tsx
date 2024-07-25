import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'Nombre', headerName: 'Nombre', width: 100, editable: true },
    { field: 'Apellido', headerName: 'Apellido', width: 100, editable: true },
    { field: 'Disponibilidad', headerName: 'Disponibilidad', width: 110, editable: true },
    { field: 'Status', headerName: 'Status', width: 100, editable: true },
    { field: 'Habilidades', headerName: 'Habilidades', width: 200, editable: true },
    {
        field: 'Editar',
        headerName: 'Editar',
        width: 60,
        sortable: false,
        renderCell: (params) => (
            <GridActionsCellItem
                icon={<EditIcon />}
                label="Edit"
                onClick={() => handleEdit(params.row.id)}
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
                onClick={() => handleDelete(params.row.id)}
            />
        ),
    },
];

const rows = [
    { id: 1, Nombre: 'Juan', Apellido: 'Pérez', Disponibilidad: 'Mañana', Status: 'Activo', Habilidades: 'Cardiología, Urgencias' },
    { id: 2, Nombre: 'María', Apellido: 'Gómez', Disponibilidad: 'Tarde', Status: 'Activo', Habilidades: 'Pediatría, Endocrinología' },
    { id: 3, Nombre: 'Pedro', Apellido: 'Martínez', Disponibilidad: 'Mañana', Status: 'Inactivo', Habilidades: 'Neurología, Terapia Física' },
    { id: 4, Nombre: 'Ana', Apellido: 'López', Disponibilidad: 'Tarde', Status: 'Activo', Habilidades: 'Ortopedia, Rehabilitación' },
    { id: 5, Nombre: 'Luis', Apellido: 'Ramírez', Disponibilidad: 'Mañana', Status: 'Activo', Habilidades: 'Dermatología, Cirugía' },
    { id: 6, Nombre: 'Laura', Apellido: 'Hernández', Disponibilidad: 'Tarde', Status: 'Inactivo', Habilidades: 'Radiología, Diagnóstico' },
    { id: 7, Nombre: 'Carlos', Apellido: 'García', Disponibilidad: 'Mañana', Status: 'Activo', Habilidades: 'Oncología, Hematología' },
    { id: 8, Nombre: 'Patricia', Apellido: 'Morales', Disponibilidad: 'Tarde', Status: 'Activo', Habilidades: 'Cirugía General, Gastroenterología' },
    { id: 9, Nombre: 'Ricardo', Apellido: 'Sánchez', Disponibilidad: 'Mañana', Status: 'Inactivo', Habilidades: 'Ginecología, Obstetricia' },
];

const handleEdit = async (id: number) => {
    const result = await Swal.fire({
        title: "¿Estás seguro de que deseas editar este médico?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Sí, editar',
        cancelButtonText: 'No, cancelar',
        dangerMode: true,
    });

    if (result.isConfirmed) {
        try {
            // Simulación de llamada a la API
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Aquí puedes actualizar el estado o recargar datos si es necesario
        } catch (error) {
            Swal.fire("Error", "Hubo un problema al editar el médico. Inténtalo de nuevo.", "error");
        }
    }
};

const handleDelete = async (id: number) => {
    const result = await Swal.fire({
        title: "¿Estás seguro de que deseas eliminar este médico?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'No, cancelar',
        dangerMode: true,
    });

    if (result.isConfirmed) {
        try {
            // Simulación de llamada a la API
            await new Promise((resolve) => setTimeout(resolve, 1000));

            Swal.fire("Eliminado", "El médico ha sido eliminado correctamente.", "success");
            // Actualizar estado o recargar datos aquí
        } catch (error) {
            Swal.fire("Error", "Hubo un problema al eliminar el médico. Inténtalo de nuevo.", "error");
        }
    }
};

export const MedicosPage = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 4, pl: 1 }}>
            <Paper elevation={3} sx={{ width: '100%', maxWidth: 900, p: 3 }}>
                {/* Breadcrumbs */}
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" component={RouterLink} to="/dashboard" sx={{ display: 'flex', alignItems: 'center' }}>
                        <HomeIcon sx={{ mr: 0.5 }} />
                        Inicio
                    </Link>
                    
                    <Typography color="textPrimary">Médicos</Typography>
                </Breadcrumbs>

                {/* Page Title */}
                <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
                    Lista de Médicos
                </Typography>

                {/* Data Grid */}
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
                    autoHeight
                    sx={{ mt: 2 }}
                />

                {/* Add Médico Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button 
                        variant="contained"
                        sx={{
                            bgcolor: '#43A49B',
                            color: 'white',
                            textTransform: 'capitalize',
                            '&:hover': {
                                bgcolor: '#51C5BA',
                            },
                        }}
                        onClick={() => navigate("/Agregar-medicos")}
                    >
                        Agregar Médicos
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};