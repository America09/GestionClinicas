import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Breadcrumbs,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormHelperText
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

interface FormData {
  name: string;
  surname: string;
  address: string;
  gender: string;
  email: string;
  phone: string;
  state: string;
  postalCode: string;
  smoke: string | null; // Updated type to string | null
  drinkAlcohol: string | null; // Updated type to string | null
  drinkCoffee: string | null; // Updated type to string | null
  isAllergic: string | null; // Updated type to string | null
  allergies: string;
  takesMedication: string | null; // Updated type to string | null
  medication: string;
  medicalHistory: string;
}

const HistorialClinico: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    address: '',
    gender: '',
    email: '',
    phone: '',
    state: '',
    postalCode: '',
    smoke: null, // Updated initial value to null
    drinkAlcohol: null, // Updated initial value to null
    drinkCoffee: null, // Updated initial value to null
    isAllergic: null, // Updated initial value to null
    allergies: '',
    takesMedication: null, // Updated initial value to null
    medication: '',
    medicalHistory: '',
  });

  const [tab, setTab] = useState<number>(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const validate = () => {
    let tempErrors: { [key: string]: string } = {};
    if (!formData.name) tempErrors.name = "Este campo es obligatorio.";
    if (!formData.surname) tempErrors.surname = "Este campo es obligatorio.";
    if (!formData.address) tempErrors.address = "Este campo es obligatorio.";
    if (!formData.gender) tempErrors.gender = "Este campo es obligatorio.";
    if (!formData.email) tempErrors.email = "Este campo es obligatorio.";
    if (!formData.phone) tempErrors.phone = "Este campo es obligatorio.";
    if (!formData.state) tempErrors.state = "Este campo es obligatorio.";
    if (!formData.postalCode) tempErrors.postalCode = "Este campo es obligatorio.";

    if (tab === 1) {
      if (!formData.smoke) tempErrors.smoke = "Este campo es obligatorio.";
      if (!formData.drinkAlcohol) tempErrors.drinkAlcohol = "Este campo es obligatorio.";
      if (!formData.drinkCoffee) tempErrors.drinkCoffee = "Este campo es obligatorio.";
      if (!formData.isAllergic) tempErrors.isAllergic = "Este campo es obligatorio.";
      if (formData.isAllergic === 'si' && !formData.allergies) {
        tempErrors.allergies = "Por favor, indique sus alergias.";
      }
      if (!formData.takesMedication) tempErrors.takesMedication = "Este campo es obligatorio.";
      if (formData.takesMedication === 'si' && !formData.medication) {
        tempErrors.medication = "Por favor, indique sus medicamentos.";
      }
    }

    if (tab === 2 && !formData.medicalHistory) {
      tempErrors.medicalHistory = "Este campo es obligatorio.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if (tab < 2) {
        setTab(tab + 1);
      } else {
        console.log(formData);
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
      }
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 2, mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} />
            Inicio
          </Link>
          <Link color="inherit" href="lista-de-pacientes">
            Pacientes
          </Link>
          <Typography color="textPrimary">Historial Clínico</Typography>
        </Breadcrumbs>
      </Box>
      <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
        HISTORIA CLÍNICA
      </Typography>
      <Tabs value={tab} onChange={handleTabChange} centered>
        <Tab label="Información General" />
        <Tab label="Hábitos / Alergias" />
        <Tab label="Antecedentes" />
      </Tabs>
      <Box sx={{ mt: 2, minHeight: '60vh' }}>
        {tab === 0 && (
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
              A continuación usted encontrará una serie de preguntas relacionadas a su salud. Es sumamente importante que las responda de forma honesta, ya que estas podrían ser trascendentales al planear y ejecutar su tratamiento.
            </Typography>
            
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>Información del cliente</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    size="small"
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Apellidos"
                    variant="outlined"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    fullWidth
                    required
                    size="small"
                    error={Boolean(errors.surname)}
                    helperText={errors.surname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Dirección"
                    variant="outlined"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    fullWidth
                    required
                    size="small"
                    error={Boolean(errors.address)}
                    helperText={errors.address}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required size="small" error={Boolean(errors.gender)}>
                    <InputLabel>Sexo</InputLabel>
                    <Select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <MenuItem value="Hombre">Hombre</MenuItem>
                      <MenuItem value="Mujer">Mujer</MenuItem>
                      <MenuItem value="Otro">Otro</MenuItem>
                    </Select>
                    {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>Datos de contacto</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    fullWidth
                    required
                    size="small"
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Teléfono"
                    variant="outlined"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    required
                    size="small"
                    error={Boolean(errors.phone)}
                    helperText={errors.phone}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>Dirección</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Estado"
                    variant="outlined"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    fullWidth
                    required
                    size="small"
                    error={Boolean(errors.state)}
                    helperText={errors.state}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Código Postal"
                    variant="outlined"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    fullWidth
                    required
                    size="small"
                    error={Boolean(errors.postalCode)}
                    helperText={errors.postalCode}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button variant="contained" onClick={() => console.log(formData)}>
                ATRÁS
              </Button>
              <Button variant="contained" sx={{ backgroundColor: 'DarkCyan', '&:hover': { backgroundColor: 'darkcyan' } }} type="submit">
                CONTINUAR
              </Button>
            </Box>
          </Box>
        )}
        {tab === 1 && (
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
              Proporcione detalles sobre sus hábitos y alergias.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>Hábitos</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset" sx={{ mb: 2 }}>
                    <FormLabel component="legend">¿Fuma?</FormLabel>
                    <RadioGroup row name="smoke" value={formData.smoke || ''} onChange={handleChange}>
                      <FormControlLabel value="si" control={<Radio size="small" />} label="Sí" />
                      <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
                    </RadioGroup>
                    {errors.smoke && <FormHelperText error>{errors.smoke}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset" sx={{ mb: 2 }}>
                    <FormLabel component="legend">¿Consume alcohol?</FormLabel>
                    <RadioGroup row name="drinkAlcohol" value={formData.drinkAlcohol || ''} onChange={handleChange}>
                      <FormControlLabel value="si" control={<Radio size="small" />} label="Sí" />
                      <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
                    </RadioGroup>
                    {errors.drinkAlcohol && <FormHelperText error>{errors.drinkAlcohol}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset" sx={{ mb: 2 }}>
                    <FormLabel component="legend">¿Toma café?</FormLabel>
                    <RadioGroup row name="drinkCoffee" value={formData.drinkCoffee || ''} onChange={handleChange}>
                      <FormControlLabel value="si" control={<Radio size="small" />} label="Sí" />
                      <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
                    </RadioGroup>
                    {errors.drinkCoffee && <FormHelperText error>{errors.drinkCoffee}</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset" sx={{ mb: 2 }}>
                    <FormLabel component="legend">¿Es alérgico a algún medicamento?</FormLabel>
                    <RadioGroup row name="isAllergic" value={formData.isAllergic || ''} onChange={handleChange}>
                      <FormControlLabel value="si" control={<Radio size="small" />} label="Sí" />
                      <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
                    </RadioGroup>
                    {errors.isAllergic && <FormHelperText error>{errors.isAllergic}</FormHelperText>}
                    {formData.isAllergic === 'si' && (
                      <TextField
                        label="Indique a cuál medicamento es alérgico"
                        variant="outlined"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        fullWidth
                        size="small"
                        sx={{ mt: 2 }}
                        error={Boolean(errors.allergies)}
                        helperText={errors.allergies}
                      />
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset" sx={{ mb: 2 }}>
                    <FormLabel component="legend">¿Toma algún medicamento?</FormLabel>
                    <RadioGroup row name="takesMedication" value={formData.takesMedication || ''} onChange={handleChange}>
                      <FormControlLabel value="si" control={<Radio size="small" />} label="Sí" />
                      <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
                    </RadioGroup>
                    {errors.takesMedication && <FormHelperText error>{errors.takesMedication}</FormHelperText>}
                    {formData.takesMedication === 'si' && (
                      <TextField
                        label="Indique cuál medicamento"
                        variant="outlined"
                        name="medication"
                        value={formData.medication}
                        onChange={handleChange}
                        fullWidth
                        size="small"
                        sx={{ mt: 2 }}
                        error={Boolean(errors.medication)}
                        helperText={errors.medication}
                      />
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'grey', '&:hover': { backgroundColor: 'darkgrey' } }}
                onClick={() => setTab(0)}
              >
                ATRÁS
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'DarkCyan', '&:hover': { backgroundColor: 'darkcyan' } }}
                type="submit"
              >
                CONTINUAR
              </Button>
            </Box>
          </Box>
        )}
        {tab === 2 && (
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
              Proporcione detalles sobre su historial médico.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>Antecedentes</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Historial Médico"
                    variant="outlined"
                    name="medicalHistory"
                    value={formData.medicalHistory}
                    onChange={handleChange}
                    fullWidth
                    required
                    multiline
                    rows={6}
                    size="small"
                    error={Boolean(errors.medicalHistory)}
                    helperText={errors.medicalHistory}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'grey', '&:hover': { backgroundColor: 'darkgrey' } }}
                onClick={() => setTab(1)}
              >
                ATRÁS
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: 'DarkCyan', '&:hover': { backgroundColor: 'darkcyan' } }}
                type="submit"
              >
                ENVIAR
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default HistorialClinico;
