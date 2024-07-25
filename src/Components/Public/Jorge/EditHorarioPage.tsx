import React, { useState, useEffect } from 'react';
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
  useTheme
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

interface FormData {
  clinicaConsultorio: string;
  medico: string;
  fecha: string;
  turno: string;
  entrada: string;
  salida: string;
}

const EditHorarioPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

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
    const horario = {
      clinicaConsultorio: 'Clínica 1',
      medico: 'Dr. Juan Pérez',
      fecha: '2023-06-19',
      turno: 'Mañana',
      entrada: '08:00',
      salida: '12:00'
    };
    setFormData(horario);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Partial<FormData> = {};
    if (!formData.clinicaConsultorio) errors.clinicaConsultorio = 'La clínica o consultorio es requerido';
    if (!formData.medico) errors.medico = 'El médico es requerido';
    if (!formData.fecha) errors.fecha = 'La fecha es requerida';
    if (!formData.turno) errors.turno = 'El turno es requerido';
    if (!formData.entrada) errors.entrada = 'La entrada es requerida';
    if (!formData.salida) errors.salida = 'La salida es requerida';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {

      try {
       
        await new Promise((resolve) => setTimeout(resolve, 1000)); 

        Swal.fire({
          title: 'Editado',
          text: 'El horario ha sido editado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          navigate('/admin-horarios'); 
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
    <Paper
      sx={{
        padding: 3,
        maxWidth: 600,
        margin: isLargeScreen ? '0' : '0 auto', 
        display: 'block',
        width: isLargeScreen ? 'calc(100% - 32px)' : '100%', 
        boxShadow: 3, 
        borderRadius: 2,
        mt: 2 
      }}
    >
      <Box sx={{ display: 'flex', ml: 2, mb: 2 }}> 
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} />
            Inicio
          </Link>
          <Link color="inherit" component={RouterLink} to="/admin-horarios">
            Horarios
          </Link>
          <Typography color="textPrimary">Editar horario</Typography>
        </Breadcrumbs>
      </Box>
      <div style={{
        width: '100%',
        maxWidth: 800,
        margin: isLargeScreen ? '0' : '0 auto', 
      }}>
        <Typography variant="h6" gutterBottom align="center">
          Editar Horario
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Clínica o consultorio"
                name="clinicaConsultorio"
                value={formData.clinicaConsultorio}
                onChange={handleChange}
                required
                error={!!formErrors.clinicaConsultorio}
                helperText={formErrors.clinicaConsultorio}
              />
            </Grid>
            <Grid item xs={12}>
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
              <TextField
                fullWidth
                label="Fecha"
                name="fecha"
                type="date"
                value={formData.fecha}
                onChange={handleChange}
                required
                error={!!formErrors.fecha}
                helperText={formErrors.fecha}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Turno"
                name="turno"
                value={formData.turno}
                onChange={handleChange}
                required
                error={!!formErrors.turno}
                helperText={formErrors.turno}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Entrada"
                name="entrada"
                type="time"
                value={formData.entrada}
                onChange={handleChange}
                required
                error={!!formErrors.entrada}
                helperText={formErrors.entrada}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Salida"
                name="salida"
                type="time"
                value={formData.salida}
                onChange={handleChange}
                required
                error={!!formErrors.salida}
                helperText={formErrors.salida}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#43A49B', '&:hover': { backgroundColor: '#369083' } }}
              >
                Guardar cambios
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Paper>
  );
};

export default EditHorarioPage;
