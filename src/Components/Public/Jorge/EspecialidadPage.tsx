import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Container } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nombre', headerName: 'Nombre', width: 150 },
    { field: 'descripcion', headerName: 'Descripción', width: 300 },
    {
        field: 'editar',
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
        field: 'eliminar',
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
    { id: 1, nombre: 'Cardiología', descripcion: 'Especialidad médica que se encarga del estudio, diagnóstico y tratamiento de las enfermedades del corazón y del aparato circulatorio.' },
    { id: 2, nombre: 'Dermatología', descripcion: 'Especialidad médica encargada del estudio y tratamiento de las enfermedades de la piel.' },
    { id: 3, nombre: 'Gastroenterología', descripcion: 'Especialidad médica que se ocupa de las enfermedades del aparato digestivo y sus glándulas anexas.' },
];

const handleEdit = (id: number) => {
    console.log('Editar fila con ID:', id);
};

const handleDelete = (id: number) => {
    console.log('Eliminar fila con ID:', id);
    if (window.confirm('¿Estás seguro de que deseas eliminar esta especialidad?')) {
        // Lógica para eliminar la especialidad
    }
};

export const EspecialidadPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Box sx={{ width: '100%', maxWidth: 1000, textAlign: 'center', lg: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Typography color="text.primary">Especialidades</Typography>
                </Breadcrumbs>

                <Typography variant="h4" component="h2" gutterBottom>
                    Lista de Especialidades
                </Typography>

                <Box sx={{ width: '100%', mt: 2 }}>
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
                        pageSizeOptions={[5, 10, 20]}
                        disableSelectionOnClick
                        autoHeight
                        sx={{
                            '& .MuiDataGrid-viewport': {
                                overflow: 'hidden',
                            },
                        }}
                    />
                </Box>

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
                        onClick={() => navigate("/admin-createespecialidad")}
                    >
                        + Añadir especialidad
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
