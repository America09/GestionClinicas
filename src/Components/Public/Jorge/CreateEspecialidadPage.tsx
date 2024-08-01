import React, { useState } from 'react';
import {
  TextField, Button, Box, Typography, Breadcrumbs, Link, Grid, Paper, useMediaQuery, useTheme
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { handleCreateEspecialidad } from '../../../Handlers/EspecialidadHandler';
import { Especialidad } from '../../../Types/Especialidad';

interface FormData {
  nombre: string;
  descripcion: string;
}

const CreateEspecialidad: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    descripcion: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      try {
        const nuevaEspecialidad: Especialidad = {
          id: 0,
          nombre: formData.nombre,
          descripcion: formData.descripcion,
        };
        await handleCreateEspecialidad(nuevaEspecialidad);
        Swal.fire({
          title: 'Guardado exitosamente',
          text: 'La especialidad ha sido guardada correctamente.',
          icon: 'success',
          confirmButtonColor: '#43A49B',
          confirmButtonText: 'Aceptar'
        });
        navigate('/admin-especialidad');
      } catch (error) {
        console.error('Error al crear la especialidad:', error);
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al guardar la especialidad.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#43A49B'
        });
      }
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos requeridos.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#43A49B'
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
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: 2, mr: 2 }}>
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

          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#408D86', 
              color: 'white', 
              '&:hover': { backgroundColor: '#004d50' }, 
              textTransform: 'capitalize' 
            }}
            onClick={handleSubmit}
          >
            Agregar
          </Button>
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
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default CreateEspecialidad;
