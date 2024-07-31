/* import React, { useEffect, useState } from 'react';
import {
  Grid,
  Button,
  Typography,
  Paper,
  Box,
  Breadcrumbs,
  Link,
  useMediaQuery,
  useTheme,
  TextField,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getRoleById, updateRole } from '../../../Services/RolesServices';
import { Role } from '../../../Types/Roles';

const EditarRol: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<{ nombreRol: string }>({ nombreRol: '' });
  const [formErrors, setFormErrors] = useState<Partial<{ nombreRol: string }>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const role = await getRoleById(Number(id));
        setFormData({ nombreRol: role.name });
      } catch (error) {
        console.error('Error fetching role:', error);
      }
    };

    fetchRole();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Partial<{ nombreRol: string }> = {};
    if (!formData.nombreRol) {
      errors.nombreRol = 'El nombre del rol es requerido';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const updatedRole: Role = {
          id: Number(id),
          name: formData.nombreRol,
          userNames: [],
          permissions: []
        };
        await updateRole(Number(id), updatedRole);
        Swal.fire({
          title: 'Actualizado exitosamente',
          text: 'El rol ha sido actualizado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        navigate('/admin-roles');
      } catch (error) {
        console.error('Error al actualizar el rol:', error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al actualizar el rol.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos requeridos.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Paper
      sx={{
        padding: 3,
        maxWidth: 600,
        margin: '0 auto',
        display: 'block',
        boxShadow: 3,
        borderRadius: 2,
        mt: 10,
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" component={RouterLink} to="/dashboard" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} />
            Inicio
          </Link>
          <Link color="inherit" component={RouterLink} to="/admin-roles">
            Roles
          </Link>
          <Typography color="textPrimary">Editar Rol</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h6" gutterBottom align="center">
          Editar Rol
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Nombre del Rol"
                name="nombreRol"
                value={formData.nombreRol}
                onChange={handleChange}
                error={!!formErrors.nombreRol}
                helperText={formErrors.nombreRol}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#43A49B', '&:hover': { backgroundColor: '#369083' } }}
              >
                Actualizar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default EditarRol;
 */