// src/components/PatientProfile.tsx
import React from 'react';
import { Patient } from './types';
import { Avatar, Box, Grid, Typography, Paper } from '@mui/material';

interface PatientProfileProps {
  patient: Patient;
}

const PerfilPaciente: React.FC<PatientProfileProps> = ({ patient }) => {
  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar alt={patient.fullName} src={patient.profilePictureUrl} sx={{ width: 100, height: 100 }} />
        </Grid>
        <Grid item xs>
          <Typography variant="h5">{patient.fullName}</Typography>
          <Typography variant="body1">{patient.email}</Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>Información General</Typography>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="body1"><strong>Nombre:</strong> {patient.medicalHistory.name}</Typography>
          <Typography variant="body1"><strong>Apellidos:</strong> {patient.medicalHistory.surname}</Typography>
          <Typography variant="body1"><strong>Dirección:</strong> {patient.medicalHistory.address}</Typography>
          <Typography variant="body1"><strong>Sexo:</strong> {patient.medicalHistory.gender}</Typography>
          <Typography variant="body1"><strong>Email:</strong> {patient.medicalHistory.email}</Typography>
          <Typography variant="body1"><strong>Teléfono:</strong> {patient.medicalHistory.phone}</Typography>
          <Typography variant="body1"><strong>Estado:</strong> {patient.medicalHistory.state}</Typography>
          <Typography variant="body1"><strong>Código Postal:</strong> {patient.medicalHistory.postalCode}</Typography>
        </Paper>
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Hábitos / Alergias</Typography>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="body1"><strong>Fuma:</strong> {patient.medicalHistory.smoke}</Typography>
          <Typography variant="body1"><strong>Toma Alcohol:</strong> {patient.medicalHistory.drinkAlcohol}</Typography>
          <Typography variant="body1"><strong>Toma Café:</strong> {patient.medicalHistory.drinkCoffee}</Typography>
          <Typography variant="body1"><strong>Es Alérgico:</strong> {patient.medicalHistory.isAllergic}</Typography>
          {patient.medicalHistory.isAllergic === 'si' && (
            <Typography variant="body1"><strong>Alergias:</strong> {patient.medicalHistory.allergies}</Typography>
          )}
          <Typography variant="body1"><strong>Toma Medicación:</strong> {patient.medicalHistory.takesMedication}</Typography>
          {patient.medicalHistory.takesMedication === 'si' && (
            <Typography variant="body1"><strong>Medicación:</strong> {patient.medicalHistory.medication}</Typography>
          )}
        </Paper>
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Antecedentes</Typography>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="body1"><strong>Historial Médico:</strong></Typography>
          <Typography variant="body1">{patient.medicalHistory.medicalHistory}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default PerfilPaciente;
