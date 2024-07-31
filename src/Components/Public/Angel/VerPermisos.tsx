import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Breadcrumbs,
  Link,
  Button,
  Modal,
  TextField,
  IconButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { fetchPermissions, createPermission, editPermission, removePermission } from '../../../Handlers/PermisosHandlers';
import { Permission } from '../../../Types/Roles';

const PermissionsPage: React.FC = () => {
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedPermission, setSelectedPermission] = useState<Permission | null>(null);
  const [formData, setFormData] = useState<{ name: string }>({ name: '' });

  useEffect(() => {
    const fetchPermissionsData = async () => {
      try {
        const permissionsData = await fetchPermissions();
        setPermissions(permissionsData);
      } catch (error) {
        console.error("Error fetching permissions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPermissionsData();
  }, []);

  const handleOpenModal = (permission: Permission | null) => {
    setSelectedPermission(permission);
    setFormData({ name: permission ? permission.name : '' });
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPermission(null);
    setFormData({ name: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPermission) {
      try {
        const updatedPermission = await editPermission(selectedPermission.id, { id: selectedPermission.id, name: formData.name });
        setPermissions(permissions.map((perm) => (perm.id === selectedPermission.id ? updatedPermission : perm)));
        Swal.fire("Editado", "El permiso ha sido editado correctamente.", "success");
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al editar el permiso.", "error");
      }
    } else {
      try {
        const newPermission = await createPermission({ id: 0, name: formData.name });
        setPermissions([...permissions, newPermission]);
        Swal.fire("Creado", "El permiso ha sido creado correctamente.", "success");
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al crear el permiso.", "error");
      }
    }
    handleCloseModal();
  };

  const handleDelete = async (id: number) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar este permiso?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await removePermission(id);
          setPermissions(permissions.filter((permission) => permission.id !== id));
          Swal.fire("Eliminado", "El permiso ha sido eliminado correctamente.", "success");
        } catch (error) {
          Swal.fire("Error", "Hubo un problema al eliminar el permiso.", "error");
        }
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
            <Typography color="textPrimary">Permisos</Typography>
          </Breadcrumbs>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Lista de Permisos
          </Typography>
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre del Permiso</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {permissions.map((permission) => (
                <TableRow key={permission.id}>
                  <TableCell>{permission.id}</TableCell>
                  <TableCell>{permission.name}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpenModal(permission)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(permission.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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
            onClick={() => handleOpenModal(null)}
          >
            + Añadir Permiso
          </Button>
        </Box>
      </Paper>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
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
            {selectedPermission ? "Editar Permiso" : "Añadir Permiso"}
          </Typography>
          <TextField
            label="Nombre del Permiso"
            name="name"
            value={formData.name}
            onChange={handleChange}
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

export default PermissionsPage;