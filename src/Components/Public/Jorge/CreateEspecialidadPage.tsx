import { useState } from 'react';
import {
  TextField, Button, Box, Typography, Breadcrumbs, Link, Grid, Paper, useMediaQuery, useTheme
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

interface FormData {
  nombre: string;
  descripcion: string;
}

const AgregarEspecialidades: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    descripcion: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Partial<FormData> = {};
    if (!formData.nombre) {
      errors.nombre = 'El nombre es requerido';
    }
    if (!formData.descripcion) {
      errors.descripcion = 'La descripción es requerida';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      Swal.fire({
        title: 'Guardado exitosamente',
        text: 'La especialidad ha sido guardada correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mt: 10,
        px: 2, 
      }}
    >
      <Paper
        sx={{
          padding: 3,
          maxWidth: 600,
          width: '100%',
          boxShadow: 3,
          borderRadius: 2,
          margin: '0 auto',
        }}
      >
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-start', ml: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" component={RouterLink} to="/dashboard" sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon sx={{ mr: 0.5 }} />
              Inicio
            </Link>
            <Link color="inherit" component={RouterLink} to="/admin-especialidad">
              Especialidades
            </Link>
            <Typography color="textPrimary">Añadir Especialidad</Typography>
          </Breadcrumbs>
        </Box>
        <Typography variant="h6" gutterBottom align="center">
          Agregar Especialidad
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                required
                error={!!formErrors.descripcion}
                helperText={formErrors.descripcion}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#408D86', color: 'white', '&:hover': { backgroundColor: '#004d50' }, width: 'auto' }}
              >
                Agregar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AgregarEspecialidades;
