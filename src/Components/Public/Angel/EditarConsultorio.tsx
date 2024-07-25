import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Typography,
  Paper,
  Box,
  Breadcrumbs,
  Link,
  useMediaQuery,
  useTheme
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditarConsultorio: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    disponibilidad: false,
    status: false
  });

  const [formErrors, setFormErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: any = {};
    if (!formData.nombre) errors.nombre = 'El nombre es requerido';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
     
      try {
        
        await new Promise((resolve) => setTimeout(resolve, 1000)); 

        Swal.fire({
          title: 'Editado',
          text: 'El consultorio ha sido editado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al guardar el consultorio. Inténtalo de nuevo.',
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
        margin: isLargeScreen ? '0' : '0 auto', 
        display: 'block',
        width: isLargeScreen ? 'calc(100% - 32px)' : '100%', 
        boxShadow: 3, 
        borderRadius: 2, 
        mt: 4 
      }}
    >
      <Box sx={{ display: 'flex', ml: 2, mb: 2 }}> 
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" component={RouterLink} to="/dashboard" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} />
            Inicio
          </Link>
          <Link color="inherit" component={RouterLink} to="/admin-consultorios">
            Consultorios
          </Link>
          <Typography color="textPrimary">Editar consultorio</Typography>
        </Breadcrumbs>
      </Box>
      <div style={{
        width: '100%',
        maxWidth: 800,
        margin: isLargeScreen ? '0' : '0 auto', 
      }}>
        <Typography variant="h6" gutterBottom align="center">
          Editar Consultorio
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                error={!!formErrors.nombre}
                helperText={formErrors.nombre}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    name="disponibilidad"
                    checked={formData.disponibilidad}
                    onChange={handleChange}
                  />
                }
                label="Disponibilidad"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    name="status"
                    checked={formData.status}
                    onChange={handleChange}
                  />
                }
                label="Status"
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#408D86', color: 'white', '&:hover': { backgroundColor: '#004d50' } }}
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Paper>
  );
};

export default EditarConsultorio;
