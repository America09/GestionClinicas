import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Breadcrumbs,
  Link,
  useMediaQuery,
  useTheme,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

interface FormData {
  paciente: string;
  medico: string;
  especialidad: string;
  fecha: string;
  hora: string;
  descripcion: string;
}

const AgregarCita: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    paciente: '',
    medico: '',
    especialidad: '',
    fecha: '',
    hora: '',
    descripcion: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Partial<FormData> = {};
    if (!formData.paciente) errors.paciente = 'El nombre del paciente es requerido';
    if (!formData.medico) errors.medico = 'El nombre del médico es requerido';
    if (!formData.especialidad) errors.especialidad = 'La especialidad es requerida';
    if (!formData.fecha) errors.fecha = 'La fecha es requerida';
    if (!formData.hora) errors.hora = 'La hora es requerida';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); 

      
        setFormData({
          paciente: '',
          medico: '',
          especialidad: '',
          fecha: '',
          hora: '',
          descripcion: '',
        });

        Swal.fire({
          title: 'Guardado exitosamente',
          text: 'La cita ha sido guardada correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al guardar la cita. Inténtalo de nuevo.',
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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 2,
        px: isSmallScreen ? 2 : 0,
      }}
    >
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
            <Link color="inherit" component={RouterLink} to="/admin-citas">
              Citas
            </Link>
            <Typography color="textPrimary">Agregar cita</Typography>
          </Breadcrumbs>
        </Box>
        <Typography variant="h6" gutterBottom align="center">
          Agregar Cita
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nombre del Paciente"
                name="paciente"
                value={formData.paciente}
                onChange={handleChange}
                required
                error={!!formErrors.paciente}
                helperText={formErrors.paciente}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nombre del Médico"
                name="medico"
                value={formData.medico}
                onChange={handleChange}
                required
                error={!!formErrors.medico}
                helperText={formErrors.medico}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required error={!!formErrors.especialidad}>
                <InputLabel>Especialidad</InputLabel>
                <Select
                  name="especialidad"
                  value={formData.especialidad}
                  onChange={handleChange}
                >
                  <MenuItem value="Cardiología">Cardiología</MenuItem>
                  <MenuItem value="Pediatría">Pediatría</MenuItem>
                  <MenuItem value="Neurología">Neurología</MenuItem>
                  <MenuItem value="Ortopedia">Ortopedia</MenuItem>
                  <MenuItem value="Dermatología">Dermatología</MenuItem>
                  <MenuItem value="Radiología">Radiología</MenuItem>
                  <MenuItem value="Oncología">Oncología</MenuItem>
                  <MenuItem value="Cirugía General">Cirugía General</MenuItem>
                  <MenuItem value="Ginecología">Ginecología</MenuItem>
                </Select>
                {formErrors.especialidad && (
                  <Typography variant="caption" color="error">{formErrors.especialidad}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Fecha"
                name="fecha"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.fecha}
                onChange={handleChange}
                required
                error={!!formErrors.fecha}
                helperText={formErrors.fecha}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Hora"
                name="hora"
                type="time"
                InputLabelProps={{ shrink: true }}
                value={formData.hora}
                onChange={handleChange}
                required
                error={!!formErrors.hora}
                helperText={formErrors.hora}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                name="descripcion"
                multiline
                rows={4}
                value={formData.descripcion}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#43A49B', '&:hover': { backgroundColor: '#369083' } }}
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AgregarCita;
