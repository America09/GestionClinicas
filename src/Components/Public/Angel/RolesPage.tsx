import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
  Breadcrumbs,
  Link,
  Modal,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { fetchRoles, deleteRole, updateRole } from '../../../Handlers/RolHandler';
import { Role } from '../../../Types/Roles';

const RolesPage: React.FC = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = React.useState<Role[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [openEditModal, setOpenEditModal] = React.useState<boolean>(false);
  const [selectedRole, setSelectedRole] = React.useState<Role | null>(null);
  const [formData, setFormData] = React.useState<{ nombreRol: string }>({ nombreRol: '' });

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

  const handleEdit = (role: Role) => {
    setSelectedRole(role);
    setFormData({ nombreRol: role.name });
    setOpenEditModal(true);
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
          await deleteRole(id);
          setRoles(roles.filter((role) => role.id !== id));
          Swal.fire("Eliminado", "El rol ha sido eliminado correctamente.", "success");
        } catch (error) {
          Swal.fire("Error", "Hubo un problema al eliminar el rol.", "error");
        }
      }
    });
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) {
      try {
        await updateRole(selectedRole.id, { ...selectedRole, name: formData.nombreRol });
        setRoles(roles.map((role) => (role.id === selectedRole.id ? { ...role, name: formData.nombreRol } : role)));
        Swal.fire("Editado", "El rol ha sido editado correctamente.", "success");
        setOpenEditModal(false);
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al editar el rol.", "error");
      }
    }
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
      <TableCell>
        {role.userNames && role.userNames.length > 0 ? role.userNames.join(', ') : 'Usuario no asignado'}
      </TableCell>
      <TableCell>
        <Button onClick={() => handleEdit(role)}><EditIcon /></Button>
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

      <Modal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          component="form"
          onSubmit={handleEditSubmit}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Editar Rol
          </Typography>
          <TextField
            label="Nombre del Rol"
            name="nombreRol"
            value={formData.nombreRol}
            onChange={(e) => setFormData({ ...formData, nombreRol: e.target.value })}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default RolesPage;
