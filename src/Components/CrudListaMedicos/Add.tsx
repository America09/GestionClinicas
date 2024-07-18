import React, { useState } from 'react';
import { TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl, Grid, Container, Breadcrumbs, Link, Switch, FormGroup, FormControlLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import HomeIcon from '@mui/icons-material/Home';

interface FormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  professionalLicense: string;
  school: string;
  yearsOfExperience: string;
  availability: boolean;
  status: boolean;
  skills: string;
}

const AgregarMedicos: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    professionalLicense: '',
    school: '',
    yearsOfExperience: '',
    availability: false,
    status: false,
    skills: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (name: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [name]: e.target.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Partial<FormData> = {};
    if (!formData.name) {
      errors.name = 'El nombre es requerido';
    }
    if (!formData.surname) {
      errors.surname = 'El apellido es requerido';
    }
    if (!formData.email) {
      errors.email = 'El correo electrónico es requerido';
    }
    if (!formData.phone) {
      errors.phone = 'El número de teléfono es requerido';
    }
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'La fecha de nacimiento es requerida';
    }
    if (!formData.gender) {
      errors.gender = 'El género es requerido';
    }
    if (!formData.professionalLicense) {
      errors.professionalLicense = 'La cédula profesional es requerida';
    }
    if (!formData.school) {
      errors.school = 'La escuela es requerida';
    }
    if (!formData.yearsOfExperience) {
      errors.yearsOfExperience = 'Los años de experiencia son requeridos';
    }
    if (!formData.skills) {
      errors.skills = 'Las habilidades son requeridas';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(formData);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} />
            Inicio
          </Link>
          <Link color="inherit" href="/lista-de-medicos">
            Médicos
          </Link>
          <Typography color="textPrimary">Añadir médico</Typography>
        </Breadcrumbs>
      </Box>
      <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
        Añadir médico
      </Typography>
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              error={!!formErrors.name}
              helperText={formErrors.name}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Apellido"
              variant="outlined"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              fullWidth
              error={!!formErrors.surname}
              helperText={formErrors.surname}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              fullWidth
              error={!!formErrors.email}
              helperText={formErrors.email}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Teléfono"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              fullWidth
              error={!!formErrors.phone}
              helperText={formErrors.phone}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fecha de Nacimiento"
              variant="outlined"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              type="date"
              fullWidth
              error={!!formErrors.dateOfBirth}
              helperText={formErrors.dateOfBirth}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth error={!!formErrors.gender}>
              <InputLabel>Género</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <MenuItem value="masculino">Masculino</MenuItem>
                <MenuItem value="femenino">Femenino</MenuItem>
                <MenuItem value="otro">Otro</MenuItem>
              </Select>
            </FormControl>
            {formErrors.gender && (
              <Typography variant="body2" color="error">
                {formErrors.gender}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Cédula Profesional"
              variant="outlined"
              name="professionalLicense"
              value={formData.professionalLicense}
              onChange={handleChange}
              fullWidth
              error={!!formErrors.professionalLicense}
              helperText={formErrors.professionalLicense}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Escuela"
              variant="outlined"
              name="school"
              value={formData.school}
              onChange={handleChange}
              fullWidth
              error={!!formErrors.school}
              helperText={formErrors.school}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Años de Experiencia"
              variant="outlined"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              fullWidth
              error={!!formErrors.yearsOfExperience}
              helperText={formErrors.yearsOfExperience}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormControlLabel
                control={<Switch checked={formData.availability} onChange={handleSwitchChange('availability')} />}
                label="Disponible"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <FormControlLabel
                control={<Switch checked={formData.status} onChange={handleSwitchChange('status')} />}
                label="Activo"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Habilidades"
              variant="outlined"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              fullWidth
              error={!!formErrors.skills}
              helperText={formErrors.skills}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'DarkCyan',
                  '&:hover': {
                    backgroundColor: 'darkcyan',
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

export default AgregarMedicos;
