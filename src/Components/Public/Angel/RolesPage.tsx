import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Button, Box, Paper, Breadcrumbs, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'Rol', headerName: 'Rol', width: 150, editable: true },
  { field: 'Usuario', headerName: 'Usuario', width: 180, editable: true },
  { field: 'Acceso', headerName: 'Acceso', width: 180, editable: true },
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
  { id: 1, Rol: 'Administrador', Usuario: 'Juan Pérez', Acceso: 'Acceso Total' },
  { id: 2, Rol: 'Usuario', Usuario: 'María López', Acceso: 'Acceso Moderado' },
  { id: 3, Rol: 'Médico', Usuario: 'Carlos Sánchez', Acceso: 'Acceso Limitado' },
  { id: 4, Rol: 'Usuario', Usuario: 'Ana Rodríguez', Acceso: 'Acceso Moderado' },
  { id: 5, Rol: 'Médico', Usuario: 'Luis Gómez', Acceso: 'Acceso Limitado' },
  { id: 6, Rol: 'Administrador', Usuario: 'Laura Fernández', Acceso: 'Acceso Total' },
  { id: 7, Rol: 'Usuario', Usuario: 'David Martínez', Acceso: 'Acceso Moderado' },
  { id: 8, Rol: 'Médico', Usuario: 'Andrea Morales', Acceso: 'Acceso Limitado' },
  { id: 9, Rol: 'Usuario', Usuario: 'Sofia Ramírez', Acceso: 'Acceso Moderado' },
];

const handleEdit = (id: number) => {
  Swal.fire({
    title: "¿Estás seguro de que deseas editar este rol?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: 'Sí, editar',
    cancelButtonText: 'No, cancelar',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        Swal.fire("Editado", "El rol ha sido editado correctamente.", "success");
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al editar el rol. Inténtalo de nuevo.", "error");
      }
    }
  });
};

const handleDelete = (id: number) => {
  Swal.fire({
    title: "¿Estás seguro de que deseas eliminar este rol?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        Swal.fire("Eliminado", "El rol ha sido eliminado correctamente.", "success");
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al eliminar el rol. Inténtalo de nuevo.", "error");
      }
    }
  });
};

export const RolesPage = () => {
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" component={RouterLink} to="/dashboard" sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon sx={{ mr: 0.5 }} />
              Inicio
            </Link>
            <Typography color="textPrimary">Roles</Typography>
          </Breadcrumbs>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Lista de Roles
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

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
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
            onClick={() => navigate("/agregar-roles")}
          >
            + Añadir Rol
          </Button>
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
            onClick={() => navigate('/admin-rolespermisos')}
          >
            + Añadir Permisos
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
