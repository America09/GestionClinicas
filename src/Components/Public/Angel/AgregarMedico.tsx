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
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Container
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const AgregarMedico: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    genero: '',
    cedula: '',
    escuela: '',
    anosExperiencia: '',
    disponibilidad: false,
    status: false,
    habilidades: '',
  });

  const [formErrors, setFormErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown; }>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name!]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: any = {};
    if (!formData.nombre) errors.nombre = 'El nombre es requerido';
    if (!formData.apellido) errors.apellido = 'El apellido es requerido';
    if (!formData.correo) errors.correo = 'El correo es requerido';
    if (!formData.fechaNacimiento) errors.fechaNacimiento = 'La fecha de nacimiento es requerida';
    if (!formData.genero) errors.genero = 'El género es requerido';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Reinicia el formulario
        setFormData({
          nombre: '',
          apellido: '',
          correo: '',
          telefono: '',
          fechaNacimiento: '',
          genero: '',
          cedula: '',
          escuela: '',
          anosExperiencia: '',
          disponibilidad: false,
          status: false,
          habilidades: '',
        });

        Swal.fire({
          title: 'Guardado exitosamente',
          text: 'El médico ha sido guardado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al guardar el médico. Inténtalo de nuevo.',
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

  return (
    <Container maxWidth="md">
      <Paper
        sx={{
          padding: 3,
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
            <Link color="inherit" component={RouterLink} to="/admin-medicos">
              Médicos
            </Link>
            <Typography color="textPrimary">Agregar médico</Typography>
          </Breadcrumbs>
        </Box>
        <Typography variant="h6" gutterBottom align="center">
          Agregar Médico
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
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
              <TextField
                fullWidth
                label="Apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                error={!!formErrors.apellido}
                helperText={formErrors.apellido}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Correo Electrónico"
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleChange}
                required
                error={!!formErrors.correo}
                helperText={formErrors.correo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Teléfono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                error={!!formErrors.telefono}
                helperText={formErrors.telefono}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Fecha de Nacimiento"
                name="fechaNacimiento"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.fechaNacimiento}
                onChange={handleChange}
                error={!!formErrors.fechaNacimiento}
                helperText={formErrors.fechaNacimiento}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!formErrors.genero}>
                <InputLabel id="genero-label">Género</InputLabel>
                <Select
                  labelId="genero-label"
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="masculino">Masculino</MenuItem>
                  <MenuItem value="femenino">Femenino</MenuItem>
                </Select>
                {formErrors.genero && (
                  <Typography variant="caption" color="error">{formErrors.genero}</Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Cédula Profesional"
                name="cedula"
                type="text"
                value={formData.cedula}
                onChange={handleChange}
                error={!!formErrors.cedula}
                helperText={formErrors.cedula}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Escuela"
                name="escuela"
                value={formData.escuela}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Años de Experiencia"
                name="anosExperiencia"
                type="number"
                value={formData.anosExperiencia}
                onChange={handleChange}
                InputProps={{ inputProps: { min: 0 } }}
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Habilidades"
                name="habilidades"
                multiline
                rows={4}
                value={formData.habilidades}
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
    </Container>
  );
};

export default AgregarMedico;
