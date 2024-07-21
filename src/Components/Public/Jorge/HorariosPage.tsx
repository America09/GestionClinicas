import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Container, useMediaQuery, Theme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { CreateHorario } from './CreateHorarioPage';
import { useTheme } from '@mui/material/styles';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.5, minWidth: 90 },
    { field: 'fecha', headerName: 'Fecha', flex: 1, minWidth: 150 },
    { field: 'turno', headerName: 'Turno', flex: 1, minWidth: 150 },
    { field: 'entrada', headerName: 'Entrada', flex: 1, minWidth: 150 },
    { field: 'salida', headerName: 'Salida', flex: 1, minWidth: 150 },
    {
        field: 'editar',
        headerName: 'Editar',
        flex: 0.5,
        minWidth: 100,
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
        flex: 0.5,
        minWidth: 100,
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
    { id: 1, fecha: '2023-06-19', turno: 'Matutino', entrada: '08:00', salida: '12:00' },
    { id: 2, fecha: '2023-06-20', turno: 'Vespertino', entrada: '13:00', salida: '17:00' },
    { id: 3, fecha: '2023-06-25', turno: 'Matutino', entrada: '08:00', salida: '12:00' },
    { id: 4, fecha: '2023-06-26', turno: 'Vespertino', entrada: '13:00', salida: '17:00' },
    { id: 5, fecha: '2023-06-27', turno: 'Matutino', entrada: '08:00', salida: '12:00' },
];

const handleEdit = (id: number) => {
    console.log('Editar fila con ID:', id);
};

const handleDelete = (id: number) => {
    console.log('Eliminar fila con ID:', id);
    if (window.confirm('¿Estás seguro de que deseas eliminar este horario?')) {
        // Lógica para eliminar el horario
    }
};

export const HorariosPage: React.FC = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Box sx={{ textAlign: 'center', width: '100%' }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ justifyContent: 'center', display: 'flex', mb: 2 }}>
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Typography color="text.primary">Horarios</Typography>
                </Breadcrumbs>

                <Typography variant="h4" component="h2" gutterBottom>
                    Lista de Horarios
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
                            '& .MuiDataGrid-root': {
                                overflowX: 'auto',
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
                        onClick={() => navigate("/admin-createHorarios")}
                    >
                        + Añadir horario
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
