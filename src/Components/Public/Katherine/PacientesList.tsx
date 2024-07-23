import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Container, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.2, minWidth: 90 },
    { field: 'fecha', headerName: 'Fecha', flex: 1, minWidth: 150 },
    { field: 'turno', headerName: 'Turno', flex: 1, minWidth: 150 },
    { field: 'entrada', headerName: 'Entrada', flex: 1, minWidth: 150 },
    { field: 'salida', headerName: 'Salida', flex: 1, minWidth: 150 },
    {
        field: 'acciones',
        headerName: 'Acciones',
        flex: 0.6,
        minWidth: 180,
        sortable: false,
        renderCell: (params) => (
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                <Link href={`/historial/${params.id}`} underline="none" color="inherit">
                    <MedicalServicesIcon />
                </Link>
                <GridActionsCellItem
                    icon={<EditIcon />}
                    label="Editar"
                    onClick={() => console.log('Editar', params.id)}
                />
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Eliminar"
                    onClick={() => console.log('Eliminar', params.id)}
                />
            </Box>
        ),
    },
];

const rows = [
    { id: 1, fecha: '2023-06-19', turno: 'Matutino', entrada: '08:00', salida: '12:00' },
    { id: 2, fecha: '2023-06-20', turno: 'Vespertino', entrada: '13:00', salida: '17:00' },
    { id: 3, fecha: '2023-06-25', turno: 'Matutino', entrada: '08:00', salida: '12:00' },
    { id: 4, fecha: '2023-06-26', turno: 'Vespertino', entrada: '13:00', salida: '17:00' },
    { id: 5, fecha: '2023-06-27', turno: 'Matutino', entrada: '08:00', salida: '12:00' },
];

export const ListaPacientes: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
            <Paper sx={{ width: '100%', padding: 4, boxShadow: 3, borderRadius: 2 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
                <HomeIcon sx={{ mr: 0.5 }} />
                Inicio
              </Link>
              <Typography color="textPrimary">Lista de pacientes</Typography>
            </Breadcrumbs>
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    Lista de Pacientes
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
                        autoHeight
                        sx={{ '& .MuiDataGrid-root': { overflowX: 'auto' } }}
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
                            width: { xs: '100%', sm: 'auto' }, // Responsive button width
                        }}
                        onClick={() => navigate("/admin-createHorarios")}
                    >
                        + Agregar Paciente
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};
