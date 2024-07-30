import { DataGrid, GridColDef, GridActionsCellItem, GridRenderCellParams } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Paper } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const rows = [
  { id: 1, Nombre: 'Samantha', Apellido: 'Magaña', Correo: 'usuario123@gmail.com', Teléfono:'9988971232' },
  { id: 2, Nombre: 'Anny', Apellido: 'Lopez', Correo: 'usuario123@gmail.com', Teléfono:'9988971232' },
  { id: 3, Nombre: 'Sofía', Apellido: 'Ramos', Correo: 'usuario123@gmail.com', Teléfono:'9988971232' },
  { id: 4, Nombre: 'Carlos', Apellido: 'Jimenez', Correo: 'usuario123@gmail.com', Teléfono:'9988971232' },
  { id: 5, Nombre: 'Esmeralda', Apellido: 'Florio', Correo: 'usuario123@gmail.com', Teléfono:'9988971232' },
  { id: 6, Nombre: 'Gerardo', Apellido: 'Tun', Correo: 'usuario123@gmail.com', Teléfono:'9988971232' },
  { id: 7, Nombre: 'Hector', Apellido: 'Gonzales', Correo: 'usuario123@gmail.com', Teléfono:'9988971232' },
  { id: 8, Nombre: 'Ivan', Apellido: 'Basurto', Correo: 'usuario123@gmail.com', Teléfono:'9988971232' },
  { id: 9, Nombre: 'Javier', Apellido: 'Escobedo', Correo: 'usuario123@gmail.com', Teléfono:'9988971232' },
];

export const ListPacientes = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/admin-Historial${id}`);
  };

  const handleEdit = (id: number) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas editar este paciente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Sí, editar',
      cancelButtonText: 'No, cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log(`Editing paciente with ID: ${id}`);
        } catch (error) {
          Swal.fire("Error", "Hubo un problema al editar los datos del paciente. Inténtalo de nuevo.", "error");
        }
      }
    });
  };

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar este paciente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log(`Deleting paciente with ID: ${id}`);
          Swal.fire("Eliminado", "El paciente ha sido eliminado correctamente.", "success");
        } catch (error) {
          Swal.fire("Error", "Hubo un problema al eliminar los datos del paciente. Inténtalo de nuevo.", "error");
        }
      }
    });
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'Nombre', headerName: 'Nombre', width: 150, editable: true },
    { field: 'Apellido', headerName: 'Apellido', width: 180, editable: true },
    { field: 'Correo', headerName: 'Correo', width: 180, editable: true },
    { field: 'Teléfono', headerName: 'Teléfono', width: 180, editable: true },
    {
      field: 'Historial',
      headerName: 'Historial',
      width: 100,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <GridActionsCellItem
          icon={<MedicalServicesIcon />}
          label="Historial"
          onClick={() => handleClick(params.id as number)}
        />
      ),
    },
    {
      field: 'Editar',
      headerName: 'Editar',
      width: 100,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => handleEdit(params.id as number)}
        />
      ),
    },
    {
      field: 'Eliminar',
      headerName: 'Eliminar',
      width: 100,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDelete(params.id as number)}
        />
      ),
    },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Paper
        sx={{
          padding: 3,
          maxWidth: 1100,
          width: '100%',
          boxShadow: 3,
          borderRadius: 2,
          margin: '0 auto', 
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                <HomeIcon sx={{ mr: 0.5 }} />
                Inicio
              </Link>
              <Typography color="textPrimary">Lista de pacientes</Typography>
            </Breadcrumbs>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Lista de Pacientes
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
              autoHeight
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#408D86', color: 'white', '&:hover': { backgroundColor: '#004d50' }
              }}
              onClick={() => navigate("/agregar-pacientes")}
            >
              + Añadir Paciente
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
