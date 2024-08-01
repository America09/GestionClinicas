import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Grid, Container, Breadcrumbs, Link, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Swal from 'sweetalert2';
import { handleCreatePatient, handleUpdatePatient, getPatientById } from '../../../Handlers/PatientHandler';
import { Patient, UserPatient } from '../../../Types/Patient';

interface FormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  bloodGroup: string;
  occupation: string;
  maritalStatus: string;
  address: string;
  gender: string;
}

const initialFormData: FormData = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  bloodGroup: '',
  occupation: '',
  maritalStatus: '',
  address: '',
  gender: '',
};

const EditarPacientes: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editing, setEditing] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const data = await getPatientById(id?.toString() ?? '');
        console.log('Fetched Patient Data:', data); // Verifica los datos obtenidos
        if (data) {
          setFormData(data);
          setEditing(true);
        } else {
          setEditing(false);
        }
      } catch (error) {
        console.error('Error fetching patient', error);
      }
    };
    fetchPatient();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};

    if (!formData.name) tempErrors.name = "Este campo es obligatorio.";
    if (!formData.surname) tempErrors.surname = "Este campo es obligatorio.";
    if (!formData.email) tempErrors.email = "Este campo es obligatorio.";
    if (!formData.phone) tempErrors.phone = "Este campo es obligatorio.";
    if (!formData.bloodGroup) tempErrors.bloodGroup = "Este campo es obligatorio.";
    if (!formData.occupation) tempErrors.occupation = "Este campo es obligatorio.";
    if (!formData.maritalStatus) tempErrors.maritalStatus = "Este campo es obligatorio.";
    if (!formData.address) tempErrors.address = "Este campo es obligatorio.";
    if (!formData.gender) tempErrors.gender = "Este campo es obligatorio.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      try {
        const user: UserPatient = {
          username: `${formData.name} ${formData.surname}`,
          email: formData.email,
          password: 'pacientetest', // Usa un valor seguro en producción
          role: 1,
        };

        const patients: Patient = {
          occupation: formData.occupation,
          picture: "", // Usa una imagen por defecto o actualiza según sea necesario
          phone: formData.phone,
          bloodGroup: formData.bloodGroup,
          maritalStatus: formData.maritalStatus,
          address: formData.address,
          gender: formData.gender,
          userId: 0, // Actualiza con el ID adecuado si es necesario
        };

        if (editing) {
          // Actualiza el paciente
          await handleUpdatePatient(id?.toString() ?? '', patients);
          Swal.fire({
            icon: 'success',
            title: 'Actualizado',
            text: 'El paciente se ha actualizado correctamente.',
          });
        } else {
          // Crea el paciente
          await handleCreatePatient(user, patients);
          Swal.fire({
            icon: 'success',
            title: 'Guardado',
            text: 'El paciente se ha guardado correctamente.',
          });
        }

        navigate('/admin-ListPacientes');
        setFormData(initialFormData);
        setEditing(false);
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
      <Paper sx={{ p: 3, mt: 2, boxShadow: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon sx={{ mr: 0.5 }} />
              Inicio
            </Link>
            <Link color="inherit" href="/admin-ListPacientes">
              Pacientes
            </Link>
            <Typography color="textPrimary">{editing ? 'Editar paciente' : 'Añadir paciente'}</Typography>
          </Breadcrumbs>
        </Box>
        <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
          {editing ? 'Editar paciente' : 'Añadir paciente'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {/* Campos de Patient */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nombre"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                error={!!errors.name}
                helperText={errors.name}
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
                error={!!errors.surname}
                helperText={errors.surname}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Correo"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email}
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
                error={!!errors.phone}
                helperText={errors.phone}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Grupo Sanguíneo"
                variant="outlined"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                fullWidth
                error={!!errors.bloodGroup}
                helperText={errors.bloodGroup}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Ocupación"
                variant="outlined"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                fullWidth
                error={!!errors.occupation}
                helperText={errors.occupation}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Estado Civil"
                variant="outlined"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                fullWidth
                error={!!errors.maritalStatus}
                helperText={errors.maritalStatus}
                required
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
                error={!!errors.address}
                helperText={errors.address}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Género"
                variant="outlined"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                fullWidth
                error={!!errors.gender}
                helperText={errors.gender}
                required
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained" color="primary">
              {editing ? 'Actualizar' : 'Guardar'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default EditarPacientes;
