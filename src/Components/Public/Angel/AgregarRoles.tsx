import React, { useState, useEffect } from 'react';
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addRole, fetchRoles } from '../../../Handlers/RolHandler';
import { User } from '../../../Types/User';
import { Role } from '../../../Types/Role';

const AgregarRol: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreRol: '',
    usuarioId: '',
  });

  const [formErrors, setFormErrors] = useState<any>({});
  const [roles, setRoles] = useState<Role[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRolesData = async () => {
      try {
        const rolesData = await fetchRoles();
        setRoles(rolesData);
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRolesData();
  }, []);

  const handleChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name!]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: any = {};
    if (!formData.nombreRol) {
      errors.nombreRol = 'El nombre del rol es requerido';
    }
    if (!formData.usuarioId) {
      errors.usuarioId = 'El usuario es requerido';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await addRole({ name: formData.nombreRol, userId: formData.usuarioId });
        setFormData({
          nombreRol: '',
          usuarioId: '',
        });

        Swal.fire({
          title: 'Guardado exitosamente',
          text: 'El rol ha sido guardado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        navigate('/admin-roles');
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al guardar el rol. Inténtalo de nuevo.',
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
          <Typography color="textPrimary">Añadir Rol</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h6" gutterBottom align="center">
          Agregar Rol
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth required error={!!formErrors.nombreRol}>
                <InputLabel>Rol</InputLabel>
                <Select
                  name="nombreRol"
                  value={formData.nombreRol}
                  onChange={handleChange}
                >
                  {roles.map((rol) => (
                    <MenuItem key={rol.id} value={rol.name}>
                      {rol.name}
                    </MenuItem>
                  ))}
                </Select>
                {formErrors.nombreRol && (
                  <Typography variant="body2" color="error">{formErrors.nombreRol}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Usuario"
                name="usuarioId"
                value={formData.usuarioId}
                onChange={handleChange}
                error={!!formErrors.usuarioId}
                helperText={formErrors.usuarioId}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#43A49B', '&:hover': { backgroundColor: '#369083' } }}
              >
                Agregar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default AgregarRol;
