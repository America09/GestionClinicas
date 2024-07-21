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

const AgregarMedicos: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    genero: '', // Valor inicial vacío
    cedula: '',
    escuela: '',
    anosExperiencia: '',
    disponibilidad: false,
    status: false,
    habilidades: '',
  });

  const [formErrors, setFormErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
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
      // Simulamos una llamada a una API
      try {
        // Aquí puedes hacer la llamada a la API para guardar los datos
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulación de retraso

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

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md')); // Pantallas grandes

  return (
    <Paper
      sx={{
        padding: 3,
        maxWidth: 800,
        margin: isLargeScreen ? '0' : '0 auto', // Quita el margen horizontal en pantallas grandes
        display: 'block',
        width: isLargeScreen ? 'calc(100% - 32px)' : '100%', // Ajusta el ancho en pantallas grandes
        boxShadow: 3, // Agrega el efecto de sombra
        borderRadius: 2, // Ajusta el radio del borde
      }}
    >
      <Box sx={{ display: 'flex', ml: 2, mb: 2 }}> {/* Ajustar ml para mover a la derecha */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} />
            Inicio
          </Link>
          <Link color="inherit" component={RouterLink} to="/admin-medicos">
            Médicos
          </Link>
          <Typography color="textPrimary">Añadir médico</Typography>
        </Breadcrumbs>
      </Box>
      <div style={{
        width: '100%',
        maxWidth: 800,
        margin: isLargeScreen ? '0' : '0 auto', // Mantén el margen en pantallas pequeñas
      }}>
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
                value={formData.telefono}
                onChange={handleChange}
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
              <FormControl fullWidth>
                <InputLabel id="genero-label">Género</InputLabel>
                <Select
                  labelId="genero-label"
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  required
                  error={!!formErrors.genero}
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
                value={formData.cedula}
                onChange={handleChange}
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
                Agregar 
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Paper>
  );
};

export default AgregarMedicos;
