import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box, Breadcrumbs, Link } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { fetchRoles } from '../../../Handlers/RolHandler';
import { Role } from '../../../Types/Roles';

const RolesPage: React.FC = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = React.useState<Role[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchRolesData = async () => {
      try {
        const rolesData = await fetchRoles();
        setRoles(rolesData);
      } catch (error) {
        console.error("Error fetching roles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRolesData();
  }, []);

  const handleEdit = (id: number) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas editar este rol?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Sí, editar',
      cancelButtonText: 'No, cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Editado", "El rol ha sido editado correctamente.", "success");
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
        Swal.fire("Eliminado", "El rol ha sido eliminado correctamente.", "success");
      }
    });
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

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

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell>Usuarios</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell>{role.id}</TableCell>
                  <TableCell>{role.name}</TableCell>
                  <TableCell>{role.userNames.join(', ')}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(role.id)}><EditIcon /></Button>
                    <Button onClick={() => handleDelete(role.id)}><DeleteIcon /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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

export default RolesPage;
