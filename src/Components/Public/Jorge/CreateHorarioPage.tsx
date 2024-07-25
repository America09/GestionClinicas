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

const AgregarHorario: React.FC = () => {
  const [formData, setFormData] = useState({
    clinicaConsultorio: '',
    medico: '',
    fecha: '',
    turno: '',
    entrada: '',
    salida: '',
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
    if (!formData.clinicaConsultorio) errors.clinicaConsultorio = 'La clínica o consultorio es requerido';
    if (!formData.medico) errors.medico = 'El nombre del médico es requerido';
    if (!formData.fecha) errors.fecha = 'La fecha es requerida';
    if (!formData.turno) errors.turno = 'El turno es requerido';
    if (!formData.entrada) errors.entrada = 'La entrada es requerida';
    if (!formData.salida) errors.salida = 'La salida es requerida';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); 

        Swal.fire({
          title: 'Guardado exitosamente',
          text: 'El horario ha sido guardado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al guardar el horario. Inténtalo de nuevo.',
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
    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
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
            <Link color="inherit" component={RouterLink} to="/admin-horarios">
              Horarios
            </Link>
            <Typography color="textPrimary">Añadir Horario</Typography>
          </Breadcrumbs>
        </Box>
        <Typography variant="h6" gutterBottom align="center">
          Añadir Horario
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required error={!!formErrors.clinicaConsultorio}>
                <InputLabel>Clínica o Consultorio</InputLabel>
                <Select
                  name="clinicaConsultorio"
                  value={formData.clinicaConsultorio}
                  onChange={handleChange}
                >
                  <MenuItem value="Clínica 1">Clínica 1</MenuItem>
                  <MenuItem value="Clínica 2">Clínica 2</MenuItem>
                  <MenuItem value="Consultorio 1">Consultorio 1</MenuItem>
                  <MenuItem value="Consultorio 2">Consultorio 2</MenuItem>
                </Select>
                {formErrors.clinicaConsultorio && (
                  <Typography variant="caption" color="error">{formErrors.clinicaConsultorio}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required error={!!formErrors.medico}>
                <InputLabel>Médico</InputLabel>
                <Select
                  name="medico"
                  value={formData.medico}
                  onChange={handleChange}
                >
                  <MenuItem value="Dr. Juan Pérez">Dr. Juan Pérez</MenuItem>
                  <MenuItem value="Dr. María López">Dr. María López</MenuItem>
                </Select>
                {formErrors.medico && (
                  <Typography variant="caption" color="error">{formErrors.medico}</Typography>
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
              <FormControl fullWidth required error={!!formErrors.turno}>
                <InputLabel>Turno</InputLabel>
                <Select
                  name="turno"
                  value={formData.turno}
                  onChange={handleChange}
                >
                  <MenuItem value="Mañana">Mañana</MenuItem>
                  <MenuItem value="Tarde">Tarde</MenuItem>
                </Select>
                {formErrors.turno && (
                  <Typography variant="caption" color="error">{formErrors.turno}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Entrada"
                name="entrada"
                type="time"
                InputLabelProps={{ shrink: true }}
                value={formData.entrada}
                onChange={handleChange}
                required
                error={!!formErrors.entrada}
                helperText={formErrors.entrada}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Salida"
                name="salida"
                type="time"
                InputLabelProps={{ shrink: true }}
                value={formData.salida}
                onChange={handleChange}
                required
                error={!!formErrors.salida}
                helperText={formErrors.salida}
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

export default AgregarHorario;
