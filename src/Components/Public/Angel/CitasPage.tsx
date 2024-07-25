import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'Paciente', headerName: 'Paciente', width: 100, editable: true },
  { field: 'Medico', headerName: 'Médico', width: 100, editable: true },
  { field: 'Especialidad', headerName: 'Especialidad', width: 100, editable: true },
  { field: 'Fecha', headerName: 'Fecha', width: 100, editable: true },
  { field: 'Hora', headerName: 'Hora', width: 100, editable: true },
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
  { id: 1, Paciente: 'Juan Pérez', Medico: 'Dr. Gómez', Especialidad: 'Cardiología', Fecha: '2024-07-21', Hora: '10:00', Descripcion: 'Chequeo general' },
  { id: 2, Paciente: 'Ana López', Medico: 'Dra. Martínez', Especialidad: 'Pediatría', Fecha: '2024-07-22', Hora: '11:00', Descripcion: 'Consulta de seguimiento' },
  { id: 3, Paciente: 'Luis Fernández', Medico: 'Dr. Rodríguez', Especialidad: 'Neurología', Fecha: '2024-07-23', Hora: '12:00', Descripcion: 'Evaluación neurológica' },
  { id: 4, Paciente: 'María González', Medico: 'Dra. Díaz', Especialidad: 'Ortopedia', Fecha: '2024-07-24', Hora: '09:00', Descripcion: 'Revisión de fractura' },
  { id: 5, Paciente: 'Carlos Méndez', Medico: 'Dr. García', Especialidad: 'Dermatología', Fecha: '2024-07-25', Hora: '08:00', Descripcion: 'Tratamiento de acné' },
  { id: 6, Paciente: 'Laura Ruiz', Medico: 'Dra. Sánchez', Especialidad: 'Radiología', Fecha: '2024-07-26', Hora: '13:00', Descripcion: 'Radiografía de tórax' },
  { id: 7, Paciente: 'Pedro Morales', Medico: 'Dr. Jiménez', Especialidad: 'Oncología', Fecha: '2024-07-27', Hora: '14:00', Descripcion: 'Consulta oncológica' },
  { id: 8, Paciente: 'Rosa Ortiz', Medico: 'Dra. Herrera', Especialidad: 'Cirugía General', Fecha: '2024-07-28', Hora: '15:00', Descripcion: 'Evaluación preoperatoria' },
  { id: 9, Paciente: 'Jorge Pérez', Medico: 'Dr. Castro', Especialidad: 'Ginecología', Fecha: '2024-07-29', Hora: '16:00', Descripcion: 'Consulta ginecológica' },
];

const handleEdit = (id: number) => {
  Swal.fire({
    title: "¿Estás seguro de que deseas editar esta cita?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: 'Sí, editar',
    cancelButtonText: 'No, cancelar',
    dangerMode: true,
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al editar la cita. Inténtalo de nuevo.", "error");
      }
    }
  });
};

const handleDelete = (id: number) => {
  Swal.fire({
    title: "¿Estás seguro de que deseas eliminar esta cita?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar',
    dangerMode: true,
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        Swal.fire("Eliminado", "La cita ha sido eliminada correctamente.", "success");
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al eliminar la cita. Inténtalo de nuevo.", "error");
      }
    }
  });
};

export const CitasPage = () => {
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
              <Typography color="textPrimary">Citas</Typography>
            </Breadcrumbs>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Lista de Citas
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
              onClick={() => navigate("/agregar-citas")}
            >
              + Añadir Cita
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default CitasPage;
