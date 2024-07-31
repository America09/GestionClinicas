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
import { addRole } from '../../../Handlers/RolHandler';
import { fetchUsers } from '../../../Handlers/UserHandler';
import { User } from '../../../Types/User';

const AgregarRol: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreRol: '',
    usuarioId: '',
  });

  const [formErrors, setFormErrors] = useState<any>({});
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const usuariosData = await fetchUsers();
        setUsuarios(usuariosData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsuarios();
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
            <Grid item xs={12}>
              <FormControl fullWidth required error={!!formErrors.usuarioId}>
                <InputLabel>Usuario</InputLabel>
                <Select
                  name="usuarioId"
                  value={formData.usuarioId}
                  onChange={handleChange}
                >
                  {usuarios.map((usuario) => (
                    <MenuItem key={usuario.id} value={usuario.id}>
                      {usuario.name}
                    </MenuItem>
                  ))}
                </Select>
                {formErrors.usuarioId && (
                  <Typography variant="body2" color="error">{formErrors.usuarioId}</Typography>
                )}
              </FormControl>
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
