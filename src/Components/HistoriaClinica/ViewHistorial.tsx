import React from 'react';
import { Grid, Typography, List, ListItem, ListItemText, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

// Definición de tipos para el historial médico y otra información
type MedicalHistory = {
  id: number;
  date: string;
  diagnosis: string;
  treatments: string[];
};

type UserInfo = {
  id: number;
  name: string;
  age: number;
  // Otros campos de información de usuario
};

// Props del componente
type MedicalHistoryViewProps = {
  medicalHistory: MedicalHistory;
  userInfo: UserInfo;
};

const ViewHistorial: React.FC<MedicalHistoryViewProps> = ({ medicalHistory, userInfo }) => {
  const navigate = useNavigate(); // Usar useNavigate para manejar la navegación

  const handleEditarHistorial = () => {
    // Aquí defines la ruta a la página de edición del historial clínico
    navigate('/editar-historial');
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Historial Médico
          </Typography>
          <Typography variant="body1" gutterBottom>
            Fecha: {medicalHistory.date}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Diagnóstico: {medicalHistory.diagnosis}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Tratamientos:
          </Typography>
          <List>
            {medicalHistory.treatments.map((treatment, index) => (
              <ListItem key={index}>
                <ListItemText primary={treatment} />
              </ListItem>
            ))}
          </List>
          <Button variant="contained" color="primary" href="historial-clinico" onClick={handleEditarHistorial} sx={{ mt: 2 }}>
            Editar Historial Clínico
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: 2, mt: 2 }}>
          <Typography variant="h5" gutterBottom>
            Información del Usuario
          </Typography>
          <Typography variant="body1" gutterBottom>
            Nombre: {userInfo.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Edad: {userInfo.age}
          </Typography>
          {/* Otros campos de información del usuario */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ViewHistorial;
