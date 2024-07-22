import React, { useState } from 'react';
import {
  TextField, Button, Box, Typography, Breadcrumbs, Link, Container, Grid, FormControl, Paper
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

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
      // Simulamos una llamada a una API
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

  return (
    <Container
      maxWidth="md"
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', py: 4 }}
    >
      <Paper
        sx={{
          padding: 4,
          textAlign: 'center',
          width: '100%',
          maxWidth: '800px',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon sx={{ mr: 0.5 }} />
              Inicio
            </Link>
            <Link color="inherit" component={RouterLink} to="/lista-de-especialidades">
              Especialidades
            </Link>
            <Typography color="textPrimary">Añadir Especialidad</Typography>
          </Breadcrumbs>
        </Box>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Añadir Especialidad
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  fullWidth
                  error={!!formErrors.nombre}
                  helperText={formErrors.nombre}
                  required
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Descripción"
                  variant="outlined"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  fullWidth
                  error={!!formErrors.descripcion}
                  helperText={formErrors.descripcion}
                  required
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#43A49B',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#51C5BA',
                    },
                  }}
                  type="submit"
                >
                  Guardar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateEspecialidad;
