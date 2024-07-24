import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Paper, Container } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'Nombre', headerName: 'Nombre', width: 180, editable: true },
  { field: 'Especialidad', headerName: 'Especialidad', width: 180, editable: true },
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
  { id: 1, Nombre: 'Dr. Juan Pérez', Especialidad: 'Cardiología' },
  { id: 2, Nombre: 'Dra. Ana Gómez', Especialidad: 'Pediatría' },
  { id: 3, Nombre: 'Dr. Luis Rodríguez', Especialidad: 'Neurología' },
  { id: 4, Nombre: 'Dra. María Fernández', Especialidad: 'Ortopedia' },
  { id: 5, Nombre: 'Dr. Pedro Sánchez', Especialidad: 'Dermatología' },
  { id: 6, Nombre: 'Dra. Laura Martín', Especialidad: 'Radiología' },
  { id: 7, Nombre: 'Dr. Jorge Ramírez', Especialidad: 'Oncología' },
  { id: 8, Nombre: 'Dra. Elena Torres', Especialidad: 'Cirugía General' },
  { id: 9, Nombre: 'Dr. José López', Especialidad: 'Ginecología' },
];

const handleEdit = (id: number) => {
  Swal.fire({
    title: "¿Estás seguro de que deseas editar esta especialidad?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: 'Sí, editar',
    cancelButtonText: 'No, cancelar',
    dangerMode: true,
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        Swal.fire("Editado", "La especialidad ha sido editada correctamente.", "success");
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al editar la especialidad. Inténtalo de nuevo.", "error");
      }
    }
  });
};

const handleDelete = (id: number) => {
  Swal.fire({
    title: "¿Estás seguro de que deseas eliminar esta especialidad?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar',
    dangerMode: true,
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        Swal.fire("Eliminado", "La especialidad ha sido eliminada correctamente.", "success");
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al eliminar la especialidad. Inténtalo de nuevo.", "error");
      }
    }
  });
};

export const EspecialidadPage = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="md"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}
    >
      <Paper
        sx={{
          padding: 3,
          width: '100%',
          maxWidth: 850,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', mb: 2 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                <HomeIcon sx={{ mr: 0.5 }} />
                Inicio
              </Link>
              <Typography color="textPrimary">Especialidades</Typography>
            </Breadcrumbs>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Lista de Especialidades
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
              onClick={() => navigate("/agregar-especialidad")}
            >
              + Añadir Especialidad
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};
