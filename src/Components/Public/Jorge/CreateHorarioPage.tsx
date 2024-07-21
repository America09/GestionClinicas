import React, { useState } from 'react';
import {
  TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl, Grid, Breadcrumbs, Link, Paper, Container, CssBaseline
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';

interface FormData {
  clinicaConsultorio: string;
  medico: string;
  fecha: string;
  turno: string;
  entrada: string;
  salida: string;
}

const CreateHorario: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    clinicaConsultorio: '',
    medico: '',
    fecha: '',
    turno: '',
    entrada: '',
    salida: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Partial<FormData> = {};
    if (!formData.clinicaConsultorio) {
      errors.clinicaConsultorio = 'La clínica o consultorio es requerido';
    }
    if (!formData.medico) {
      errors.medico = 'El médico es requerido';
    }
    if (!formData.fecha) {
      errors.fecha = 'La fecha es requerida';
    }
    if (!formData.turno) {
      errors.turno = 'El turno es requerido';
    }
    if (!formData.entrada) {
      errors.entrada = 'La entrada es requerida';
    }
    if (!formData.salida) {
      errors.salida = 'La salida es requerida';
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
            <Link color="inherit" component={RouterLink} to="/lista-de-horarios">
              Horarios
            </Link>
            <Typography color="textPrimary">Añadir Horario</Typography>
          </Breadcrumbs>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'left', ml: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Añadir Horario
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, display: 'flex', justifyContent: 'flex-start', ml: -15 }}>
        <Grid container spacing={2} sx={{ maxWidth: '600px' }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Clínica o consultorio"
                variant="outlined"
                name="clinicaConsultorio"
                value={formData.clinicaConsultorio}
                onChange={handleChange}
                fullWidth
                error={!!formErrors.clinicaConsultorio}
                helperText={formErrors.clinicaConsultorio}
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Médico"
                variant="outlined"
                name="medico"
                value={formData.medico}
                onChange={handleChange}
                fullWidth
                error={!!formErrors.medico}
                helperText={formErrors.medico}
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Fecha"
                variant="outlined"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                error={!!formErrors.fecha}
                helperText={formErrors.fecha}
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth error={!!formErrors.turno}>
              <InputLabel>Turno</InputLabel>
              <Select
                name="turno"
                value={formData.turno}
                onChange={handleChange}
                required
              >
                <MenuItem value="Mañana">Mañana</MenuItem>
                <MenuItem value="Tarde">Tarde</MenuItem>
              </Select>
            </FormControl>
            {formErrors.turno && (
              <Typography variant="body2" color="error">
                {formErrors.turno}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Entrada"
                variant="outlined"
                name="entrada"
                value={formData.entrada}
                onChange={handleChange}
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                error={!!formErrors.entrada}
                helperText={formErrors.entrada}
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Salida"
                variant="outlined"
                name="salida"
                value={formData.salida}
                onChange={handleChange}
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                error={!!formErrors.salida}
                helperText={formErrors.salida}
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
                Agregar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CreateHorario;
