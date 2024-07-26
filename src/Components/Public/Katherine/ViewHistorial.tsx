import React from 'react';
import { Grid, Typography, Switch, FormControlLabel } from '@mui/material';

const ClinicalHistory = ({ clinicalData }) => {
  return (
    <Grid container spacing={2} direction="column">
      <Typography variant="h4" gutterBottom>
        Historial Clínico
      </Typography>
      <Grid item>
        <Typography variant="body1"><strong>Nombre:</strong> {clinicalData.name}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>Apellido:</strong> {clinicalData.surname}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>Dirección:</strong> {clinicalData.address}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>Género:</strong> {clinicalData.gender}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>Email:</strong> {clinicalData.email}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>Teléfono:</strong> {clinicalData.phone}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>Estado:</strong> {clinicalData.state}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>Código Postal:</strong> {clinicalData.postalCode}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>¿Fuma?:</strong> {clinicalData.smoke ? 'Sí' : 'No'}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>¿Bebe Alcohol?:</strong> {clinicalData.drinkAlcohol ? 'Sí' : 'No'}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>¿Bebe Café?:</strong> {clinicalData.drinkCoffee ? 'Sí' : 'No'}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>¿Es Alérgico?:</strong> {clinicalData.isAllergic ? 'Sí' : 'No'}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>Alergias:</strong> {clinicalData.allergies}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>¿Toma Medicamentos?:</strong> {clinicalData.takesMedication ? 'Sí' : 'No'}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>Medicamentos:</strong> {clinicalData.medication}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1"><strong>Historial Médico:</strong> {clinicalData.medicalHistory}</Typography>
      </Grid>
    </Grid>
  );
};

export default ClinicalHistory;
