import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'Fecha', headerName: 'Fecha', width: 130, editable: true },
  { field: 'Turno', headerName: 'Turno', width: 90, editable: true },
  { field: 'Entrada', headerName: 'Entrada', width: 90, editable: true },
  { field: 'Salida', headerName: 'Salida', width: 90, editable: true },
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
  { id: 1, Fecha: '2024-07-25', Turno: 'Mañana', Entrada: '08:00', Salida: '14:00' },
  { id: 2, Fecha: '2024-07-26', Turno: 'Tarde', Entrada: '14:00', Salida: '20:00' },
  { id: 3, Fecha: '2024-07-27', Turno: 'Noche', Entrada: '20:00', Salida: '08:00' },
  { id: 4, Fecha: '2024-07-28', Turno: 'Mañana', Entrada: '08:00', Salida: '14:00' },
  { id: 5, Fecha: '2024-07-29', Turno: 'Tarde', Entrada: '14:00', Salida: '20:00' },
  { id: 6, Fecha: '2024-07-30', Turno: 'Noche', Entrada: '20:00', Salida: '08:00' },
  { id: 7, Fecha: '2024-07-31', Turno: 'Mañana', Entrada: '08:00', Salida: '14:00' },
  { id: 8, Fecha: '2024-08-01', Turno: 'Tarde', Entrada: '14:00', Salida: '20:00' },
  { id: 9, Fecha: '2024-08-02', Turno: 'Noche', Entrada: '20:00', Salida: '08:00' },
];

const handleEdit = (id: number) => {
  Swal.fire({
    title: "¿Estás seguro de que deseas editar este horario?",
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
        Swal.fire("Error", "Hubo un problema al editar el horario. Inténtalo de nuevo.", "error");
      }
    }
  });
};

const handleDelete = (id: number) => {
  Swal.fire({
    title: "¿Estás seguro de que deseas eliminar este horario?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar',
    dangerMode: true,
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        Swal.fire("Eliminado", "El horario ha sido eliminado correctamente.", "success");
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al eliminar el horario. Inténtalo de nuevo.", "error");
      }
    }
  });
};

export const HorariosPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
      <Paper
        sx={{
          padding: 3,
          maxWidth: 800,
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
              <Typography color="textPrimary">Horarios</Typography>
            </Breadcrumbs>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Lista de Horarios
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
              onClick={() => navigate("/agregar-horarios")}
            >
              + Añadir Horarios
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default HorariosPage;
