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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import { fetchRoles, addRole } from '../../../Handlers/RolHandler';
import { Role } from '../../../Types/Roles';

const AsignarPermisos: React.FC = () => {
  const [formData, setFormData] = useState<{ rol: string; permiso: string }>({
    rol: '',
    permiso: '',
  });

  const [roles, setRoles] = useState<Role[]>([]);
  const [formErrors, setFormErrors] = useState<any>({});
  const [permisosAsignados, setPermisosAsignados] = useState<string[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const rolesData = await fetchRoles();
        setRoles(rolesData);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchInitialData();
  }, []);

  const handleChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name!]: value,
    });
  };

  const handleAgregarPermiso = () => {
    if (formData.permiso && !permisosAsignados.includes(formData.permiso)) {
      setPermisosAsignados([...permisosAsignados, formData.permiso]);
      setFormData({ ...formData, permiso: '' });
    }
  };

  const handleEliminarPermiso = (permiso: string) => {
    setPermisosAsignados(permisosAsignados.filter((p) => p !== permiso));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: any = {};
    if (!formData.rol) {
      errors.rol = 'El rol es requerido';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const roleId = roles.find((role) => role.name === formData.rol)?.id;
        if (roleId) {
          await Promise.all(
            permisosAsignados.map((permiso) => addRole(permiso))
          );
        }

        setFormData({
          rol: '',
          permiso: '',
        });
        setPermisosAsignados([]);

        Swal.fire({
          title: 'Guardado exitosamente',
          text: 'Los permisos han sido guardados correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al guardar los permisos. Inténtalo de nuevo.',
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
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" component={RouterLink} to="/dashboard" sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon sx={{ mr: 0.5 }} />
              Inicio
            </Link>
            <Link color="inherit" component={RouterLink} to="/admin-roles">
              Roles
            </Link>
            <Typography color="textPrimary">Asignar Permisos</Typography>
          </Breadcrumbs>
        </Box>
        <div style={{
          width: '100%',
          maxWidth: 800,
          margin: isLargeScreen ? '0' : '0 auto',
        }}>
          <Typography variant="h6" gutterBottom align="center">
            Asignar Permisos a Rol
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth required error={!!formErrors.rol}>
                  <InputLabel>Rol</InputLabel>
                  <Select
                    name="rol"
                    value={formData.rol}
                    onChange={handleChange}
                  >
                    {roles.map((role) => (
                      <MenuItem key={role.id} value={role.name}>
                        {role.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {formErrors.rol && (
                    <Typography variant="body2" color="error">{formErrors.rol}</Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    label="Permiso"
                    name="permiso"
                    value={formData.permiso}
                    onChange={handleChange}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button
                      variant="contained"
                      onClick={handleAgregarPermiso}
                      sx={{ backgroundColor: '#43A49B', '&:hover': { backgroundColor: '#369083' }, width: 'fit-content' }}
                    >
                      Agregar Permiso
                    </Button>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Permisos Asignados
                </Typography>
                <List>
                  {permisosAsignados.map((permiso, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={permiso} />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => handleEliminarPermiso(permiso)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: '#43A49B', '&:hover': { backgroundColor: '#369083' } }}
                >
                  Guardar Permisos
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
    </Box>
  );
};

export default AsignarPermisos;
