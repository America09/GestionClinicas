import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Paper, IconButton } from '@mui/material';
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
    renderCell: () => (
      <IconButton
        component={RouterLink}
        to="/editar-consultorios"
        sx={{ color: 'action.active' }} 
      >
        <EditIcon />
      </IconButton>
    ),
  },
  {
    field: 'Eliminar',
    headerName: 'Eliminar',
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <GridActionsCellItem
        icon={<DeleteIcon color="action" />}
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
        await new Promise((resolve) => setTimeout(resolve, 1000));
        Swal.fire("Eliminado", "El consultorio ha sido eliminado correctamente.", "success");
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al eliminar el consultorio. Inténtalo de nuevo.", "error");
      }
    }
  });
};

export const ConsultorioPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Paper
        sx={{
          padding: 3,
          maxWidth: 850,
          width: '100%',
          boxShadow: 3,
          borderRadius: 2,
          margin: '0 auto', 
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" component={RouterLink} to="/dashboard" sx={{ display: 'flex', alignItems: 'center' }}>
                <HomeIcon sx={{ mr: 0.5 }} />
                Inicio
              </Link>
              <Typography color="textPrimary">Consultorios</Typography>
            </Breadcrumbs>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Lista de Consultorios
            </Typography>
          </Box>

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
      </Paper>
    </Box>
  );
};

export default ConsultorioPage;
