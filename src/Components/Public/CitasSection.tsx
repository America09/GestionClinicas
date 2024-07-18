import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const CitasSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: '50px 0',
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: '1200px', margin: '0 auto', padding: { xs: '0 20px', md: '0' } }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: 3,
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
              },
              '&:hover img': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <img
              src="/doctorBrazo.png"
              alt="Doctor Image"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h3" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
            Citas
          </Typography>
          <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
            Agenda tu cita
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: '#555', lineHeight: 1.6 }}>
            Programar una cita con uno de nuestros profesionales de la salud es rápido y sencillo.
            Simplemente selecciona el día y la hora que mejor se ajuste a tu agenda, y nuestro sistema
            te conectará automáticamente con un médico disponible.
          </Typography>
          <Button
            variant="contained"
            href="/citas"
            sx={{
              mt: 2,
              backgroundColor: '#4caf50',
              color: 'white',
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '50px',
              '&:hover': { backgroundColor: '#43a047' },
            }}
          >
            Agendar cita
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CitasSection;
