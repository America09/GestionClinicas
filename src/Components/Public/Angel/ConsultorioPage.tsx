import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'Status', headerName: 'Status', width: 150, editable: true },
    { field: 'Disponibilidad', headerName: 'Disponibilidad', width: 180, editable: true },
    { field: 'Consultorio', headerName: 'Consultorio', width: 180, editable: true },
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
    { id: 1, Status: 'Disponible', Disponibilidad: 'Mañana', Consultorio: 'Cardiología' },
    { id: 2, Status: 'No disponible', Disponibilidad: 'Tarde', Consultorio: 'Pediatría' },
    { id: 3, Status: 'Disponible', Disponibilidad: 'Mañana', Consultorio: 'Neurología' },
    { id: 4, Status: 'Disponible', Disponibilidad: 'Tarde', Consultorio: 'Ortopedia' },
    { id: 5, Status: 'Disponible', Disponibilidad: 'Mañana', Consultorio: 'Dermatología' },
    { id: 6, Status: 'No disponible', Disponibilidad: 'Tarde', Consultorio: 'Radiología' },
    { id: 7, Status: 'Disponible', Disponibilidad: 'Mañana', Consultorio: 'Oncología' },
    { id: 8, Status: 'No disponible', Disponibilidad: 'Tarde', Consultorio: 'Cirugía General' },
    { id: 9, Status: 'Disponible', Disponibilidad: 'Mañana', Consultorio: 'Ginecología' },
];

const handleEdit = (id: number) => {
    Swal.fire({
        title: "¿Estás seguro de que deseas editar este consultorio?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Sí, editar',
        cancelButtonText: 'No, cancelar',
        dangerMode: true,
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                // Simulamos una llamada a la API
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulación de retraso

                Swal.fire("Editado", "El consultorio ha sido editado correctamente.", "success");
                // Aquí podrías actualizar el estado de tu aplicación o recargar los datos
            } catch (error) {
                Swal.fire("Error", "Hubo un problema al editar el consultorio. Inténtalo de nuevo.", "error");
            }
        }
    });
};

const handleDelete = (id: number) => {
    Swal.fire({
        title: "¿Estás seguro de que deseas eliminar este consultorio?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'No, cancelar',
        dangerMode: true,
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                // Simulamos una llamada a la API
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulación de retraso

                Swal.fire("Eliminado", "El consultorio ha sido eliminado correctamente.", "success");
                // Aquí podrías actualizar el estado de tu aplicación o recargar los datos
            } catch (error) {
                Swal.fire("Error", "Hubo un problema al eliminar el consultorio. Inténtalo de nuevo.", "error");
            }
        }
    });
};

export const ConsultorioPage = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 4, pl: 2 }}>
            <Box sx={{ width: '100%', maxWidth: 850 }}>
                {/* Breadcrumbs */}
                <Box sx={{ display: 'flex', ml: -1 }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                            <HomeIcon sx={{ mr: 0.5 }} />
                            Inicio
                        </Link>
                        <Typography color="textPrimary">Consultorios</Typography>
                    </Breadcrumbs>
                </Box>

                {/* Page Title */}
                <Box sx={{ textAlign: 'center', mb: 2, ml: -4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Lista de Consultorios
                    </Typography>
                </Box>

                {/* Data Grid */}
                <Box sx={{ mt: 2 }}>
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
                    />
                </Box>

                {/* Add Consultorio Button */}
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
                        onClick={() => navigate("/agregar-consultorios")}
                    >
                        + Añadir Consultorios
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
