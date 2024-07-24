import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Box, Typography, MenuItem,
  Select, InputLabel, FormControl, Grid, Breadcrumbs, Link, Container, Paper
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

interface FormData {
  clinicaConsultorio: string;
  medico: string;
  fecha: string;
  turno: string;
  entrada: string;
  salida: string;
}

interface CreateHorarioProps {
  initialData?: FormData;
  onSave: (data: FormData) => void;
}

const CreateHorario: React.FC<CreateHorarioProps> = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState<FormData>({
    clinicaConsultorio: '',
    medico: '',
    fecha: '',
    turno: '',
    entrada: '',
    salida: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

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
      onSave(formData);
      Swal.fire({
        title: 'Guardado exitosamente',
        text: 'El horario ha sido guardado correctamente.',
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
            <Link color="inherit" component={RouterLink} to="/lista-de-horarios">
              Horarios
            </Link>
            <Typography color="textPrimary">Añadir Horario</Typography>
          </Breadcrumbs>
        </Box>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Añadir Horario
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!formErrors.clinicaConsultorio}>
                <InputLabel>Clínica o consultorio</InputLabel>
                <Select
                  name="clinicaConsultorio"
                  value={formData.clinicaConsultorio}
                  onChange={handleChange}
                  required
                  label="Clínica o consultorio"
                >
                  <MenuItem value="Clínica 1">Clínica 1</MenuItem>
                  <MenuItem value="Clínica 2">Clínica 2</MenuItem>
                  <MenuItem value="Consultorio 1">Consultorio 1</MenuItem>
                  <MenuItem value="Consultorio 2">Consultorio 2</MenuItem>
                </Select>
                {formErrors.clinicaConsultorio && (
                  <Typography variant="body2" color="error">
                    {formErrors.clinicaConsultorio}
                  </Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!formErrors.medico}>
                <InputLabel>Médico</InputLabel>
                <Select
                  name="medico"
                  value={formData.medico}
                  onChange={handleChange}
                  required
                  label="Médico"
                >
                  <MenuItem value="Dr. Juan Pérez">Dr. Juan Pérez</MenuItem>
                  <MenuItem value="Dr. María López">Dr. María López</MenuItem>
                </Select>
                {formErrors.medico && (
                  <Typography variant="body2" color="error">
                    {formErrors.medico}
                  </Typography>
                )}
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
                  label="Turno"
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
                  {initialData ? 'Guardar cambios' : 'Agregar'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateHorario;
