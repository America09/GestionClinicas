import React, { useState } from 'react';
import {
  TextField, Button, Box, Typography, Breadcrumbs, Link, Paper, Container, CssBaseline, Grid, FormControl
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';

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
      console.log(formData);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 5, mb: 4, px: 0 }}>
        <Box sx={{ display: 'flex', ml: -14 }}>
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
      </Box>
      <Box sx={{ textAlign: 'left', ml: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Añadir Especialidad
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, display: 'flex', justifyContent: 'flex-start', ml: -15 }}>
        <Grid container spacing={2} sx={{ maxWidth: '600px' }}>
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
    </Container>
  );
};

export default CreateEspecialidad;

