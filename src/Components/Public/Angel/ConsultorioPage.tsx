import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

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
    console.log('Editar fila con ID:', id);
};

const handleDelete = (id: number) => {
    console.log('Eliminar fila con ID:', id);
};

export const ConsultorioPage = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 4, pl: 2 }}>
            <Box sx={{ width: '100%', maxWidth: 850 }}>
                {/* Breadcrumbs */}
                <Box sx={{ display: 'flex', ml: -14 }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                            <HomeIcon sx={{ mr: 0.5 }} />
                            Inicio
                        </Link>
                        <Link color="inherit" component={RouterLink} to="/admin-consultorios">
                            Consultorios
                        </Link>
                        <Typography color="textPrimary">Lista de Consultorios</Typography>
                    </Breadcrumbs>
                </Box>

                {/* Page Title */}
                <Box sx={{ textAlign: 'center', mb: 2 }}>
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
