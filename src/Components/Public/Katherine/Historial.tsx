import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Breadcrumbs,
  Link,
  Tabs,
  Tab,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText 
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Swal from 'sweetalert2';
import { History } from '../../../Types/History';  
import {
  getHistoryById,
  handleCreateHistory,
  handleUpdateHistory,
} from '../../../Handlers/HistoryHandler';
import { useParams, useNavigate } from 'react-router-dom';
const initialFormData: History = {
  name: '',
  surname: '',
  address: '',
  gender: '',
  email: '',
  phone: '',
  state: '',
  postalCode: '',
  smoke: '',
  alcohol: '',
  coffee: '',
  allergic: '',
  allergies: '',
  takesMedication: '',
  medication: '',
  medicalHistory: '',
  patientId: 0, 
};

const HistorialClinico: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<History>(initialFormData);
  const [histories, setHistories] = useState<History>([]);
  const [editing, setEditing] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchHistories = async () => {
      try {
        const data: History = await getHistoryById(id.toString());
        if(data){
          setFormData(data);
          setEditing(true);
        }else{
          setEditing(false);
        }
      } catch (error) {
        console.error('Error fetching histories', error);
      }
    };
    fetchHistories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
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
      if (!formData.alcohol) tempErrors.alcohol = "Este campo es obligatorio.";
      if (!formData.coffee) tempErrors.coffee = "Este campo es obligatorio.";
      if (!formData.allergic) tempErrors.allergic = "Este campo es obligatorio.";
      if (formData.allergic === 'sí' && !formData.allergies) {
        tempErrors.allergies = "Por favor, indique sus alergias.";
      }
      if (!formData.takesMedication) tempErrors.takesMedication = "Este campo es obligatorio.";
      if (formData.takesMedication === 'sí' && !formData.medication) {
        tempErrors.medication = "Por favor, indique sus medicamentos.";
      }
    }

    if (tab === 2 && !formData.medicalHistory) {
      tempErrors.medicalHistory = "Este campo es obligatorio.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    formData.patientId = parseInt(id??0);
    console.log(formData);
    if (validate()) {
      try {
        if (tab < 2) {
          setTab(tab + 1);
        } else {
          if (editing) {
            const response: History = await handleUpdateHistory(id.toString(), formData);
            console.log(response);
            Swal.fire({
              icon: 'success',
              title: 'Actualizado',
              text: 'El historial clínico se ha actualizado correctamente.',
            });
          } else {
            const response: History = await handleCreateHistory(formData);
            setHistories([...histories, response]);
            Swal.fire({
              icon: 'success',
              title: 'Guardado',
              text: 'El historial clínico se ha guardado correctamente.',
            });
          }
          navigate('/admin-Listpacientes')
          setFormData(initialFormData);
          setEditing(false);
          setTab(0);
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.',
        });
        console.error("Error submitting form data", error);
      }
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
          HISTORIA CLÍNICA
        </Typography>
      </Box>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} />
            Inicio
          </Link>
          <Link color="inherit" href="admin-ListPacientes">
            Pacientes
          </Link>
          <Typography color="text.primary">Historia Clínica</Typography>
        </Breadcrumbs>
        <Tabs value={tab} onChange={handleTabChange} aria-label="historia clinica tabs" sx={{ mt: 2 }}>
          <Tab label="Información Personal" />
          <Tab label="Hábitos" />
          <Tab label="Antecedentes Médicos" />
        </Tabs>
        <Box sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {tab === 0 && (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Nombre"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(errors.name)}
                      helperText={errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Apellido"
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(errors.surname)}
                      helperText={errors.surname}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Dirección"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(errors.address)}
                      helperText={errors.address}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth error={Boolean(errors.gender)}>
                      <InputLabel>Género</InputLabel>
                      <Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <MenuItem value="masculino">Masculino</MenuItem>
                        <MenuItem value="femenino">Femenino</MenuItem>
                      </Select>
                      <FormHelperText>{errors.gender}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Correo Electrónico"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Teléfono"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(errors.phone)}
                      helperText={errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Estado"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(errors.state)}
                      helperText={errors.state}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Código Postal"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      fullWidth
                      error={Boolean(errors.postalCode)}
                      helperText={errors.postalCode}
                    />
                  </Grid>
                </>
              )}
              {tab === 1 && (
                <>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth error={Boolean(errors.smoke)}>
                      <InputLabel>Fuma</InputLabel>
                      <Select
                        name="smoke"
                        value={formData.smoke}
                        onChange={handleChange}
                      >
                        <MenuItem value="sí">Sí</MenuItem>
                        <MenuItem value="no">No</MenuItem>
                      </Select>
                      <FormHelperText>{errors.smoke}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth error={Boolean(errors.alcohol)}>
                      <InputLabel>Bebe Alcohol</InputLabel>
                      <Select
                        name="alcohol"
                        value={formData.alcohol}
                        onChange={handleChange}
                      >
                        <MenuItem value="sí">Sí</MenuItem>
                        <MenuItem value="no">No</MenuItem>
                      </Select>
                      <FormHelperText>{errors.alcohol}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth error={Boolean(errors.coffee)}>
                      <InputLabel>Toma Café</InputLabel>
                      <Select
                        name="coffee"
                        value={formData.coffee}
                        onChange={handleChange}
                      >
                        <MenuItem value="sí">Sí</MenuItem>
                        <MenuItem value="no">No</MenuItem>
                      </Select>
                      <FormHelperText>{errors.coffee}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth error={Boolean(errors.allergic)}>
                      <InputLabel>Alérgico</InputLabel>
                      <Select
                        name="allergic"
                        value={formData.allergic}
                        onChange={handleChange}
                      >
                        <MenuItem value="sí">Sí</MenuItem>
                        <MenuItem value="no">No</MenuItem>
                      </Select>
                      <FormHelperText>{errors.allergic}</FormHelperText>
                    </FormControl>
                  </Grid>
                  {formData.allergic === 'sí' && (
                    <Grid item xs={12}>
                      <TextField
                        label="Alergias"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        fullWidth
                        error={Boolean(errors.allergies)}
                        helperText={errors.allergies}
                      />
                    </Grid>
                  )}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth error={Boolean(errors.takesMedication)}>
                      <InputLabel>Toma Medicamentos</InputLabel>
                      <Select
                        name="takesMedication"
                        value={formData.takesMedication}
                        onChange={handleChange}
                      >
                        <MenuItem value="sí">Sí</MenuItem>
                        <MenuItem value="no">No</MenuItem>
                      </Select>
                      <FormHelperText>{errors.takesMedication}</FormHelperText>
                    </FormControl>
                  </Grid>
                  {formData.takesMedication === 'sí' && (
                    <Grid item xs={12}>
                      <TextField
                        label="Medicamentos"
                        name="medication"
                        value={formData.medication}
                        onChange={handleChange}
                        fullWidth
                        error={Boolean(errors.medication)}
                        helperText={errors.medication}
                      />
                    </Grid>
                  )}
                </>
              )}
              {tab === 2 && (
                <Grid item xs={12}>
                  <TextField
                    label="Antecedentes Médicos"
                    name="medicalHistory"
                    value={formData.medicalHistory}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    error={Boolean(errors.medicalHistory)}
                    helperText={errors.medicalHistory}
                  />
                </Grid>
              )}
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button type="submit" variant="contained" sx={{ textTransform:'capitalize', backgroundColor: 'DarkCyan', '&:hover': { backgroundColor: 'darkcyan' } }}>
                  {editing ? 'Actualizar' : 'Guardar'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default HistorialClinico;
