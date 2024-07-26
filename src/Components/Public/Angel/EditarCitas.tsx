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

const EditarCitas: React.FC = () => {
  const [formData, setFormData] = useState({
    paciente: '',
    medico: '',
    especialidad: '',
    fecha: '',
    hora: ''
  });

  const [formErrors, setFormErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: any = {};
    if (!formData.paciente) errors.paciente = 'El nombre del paciente es requerido';
    if (!formData.medico) errors.medico = 'El nombre del médico es requerido';
    if (!formData.especialidad) errors.especialidad = 'La especialidad es requerida';
    if (!formData.fecha) errors.fecha = 'La fecha es requerida';
    if (!formData.hora) errors.hora = 'La hora es requerida';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      Swal.fire({
        title: "¿Estás seguro de que deseas editar esta cita?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Sí, editar',
        cancelButtonText: 'No, cancelar',
        dangerMode: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            Swal.fire({
              title: 'Editado',
              text: 'La cita ha sido editada correctamente.',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
          } catch (error) {
            Swal.fire({
              title: 'Error',
              text: 'Hubo un problema al editar la cita. Inténtalo de nuevo.',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
          }
        }
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
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Paper
        sx={{
          padding: 3,
          maxWidth: 800,
          margin: '0 auto',
          display: 'block',
          width: '100%',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: 'flex', mb: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" component={RouterLink} to="/dashboard" sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon sx={{ mr: 0.5 }} />
              Inicio
            </Link>
            <Link color="inherit" component={RouterLink} to="/admin-citas">
              Citas
            </Link>
            <Typography color="textPrimary">Editar cita</Typography>
          </Breadcrumbs>
        </Box>
        <div style={{
          width: '100%',
          maxWidth: 800,
          margin: '0 auto',
        }}>
          <Typography variant="h6" gutterBottom align="center">
            Editar Cita
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Paciente"
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
                  label="Médico"
                  name="medico"
                  value={formData.medico}
                  onChange={handleChange}
                  required
                  error={!!formErrors.medico}
                  helperText={formErrors.medico}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="especialidad-label">Especialidad</InputLabel>
                  <Select
                    labelId="especialidad-label"
                    name="especialidad"
                    value={formData.especialidad}
                    onChange={handleChange}
                    required
                    error={!!formErrors.especialidad}
                  >
                    <MenuItem value="cardiologia">Cardiología</MenuItem>
                    <MenuItem value="dermatologia">Dermatología</MenuItem>
                    <MenuItem value="neurologia">Neurología</MenuItem>
                    <MenuItem value="pediatria">Pediatría</MenuItem>
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
                  error={!!formErrors.hora}
                  helperText={formErrors.hora}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '#408D86', color: 'white', '&:hover': { backgroundColor: '#004d50' }, width: 'auto', px: 4 }}
                >
                  Guardar 
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
    </Box>
  );
};

export default EditarCitas;
