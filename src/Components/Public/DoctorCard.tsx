import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Chip, Grid, CircularProgress } from '@mui/material';

interface Doctor {
  name: string;
  specialty: string;
  languages: string;
  experience: string;
  education: string;
  consultorio: string;
  horario: string;
  image: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: 'auto',
        boxShadow: 5,
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={doctor.image}
        alt={`Imagen de ${doctor.name}`}
        sx={{ filter: 'brightness(0.9)' }}
      />
      <CardContent sx={{ padding: 1 }}>
        <Chip
          label={doctor.specialty}
          sx={{
            backgroundColor: '#00796b',
            color: 'white',
            marginBottom: 1,
            fontSize: '0.75rem',
            fontWeight: 'bold',
          }}
        />
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#333', fontSize: '1rem' }}>
          {doctor.name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
          {doctor.languages}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', marginTop: 0.5, fontSize: '0.875rem' }}>
          {doctor.experience}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', marginBottom: 1, fontSize: '0.875rem' }}>
          {doctor.education}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#e0f2f1',
            padding: 1,
            borderRadius: 1,
          }}
        >
          <Box sx={{ textAlign: 'center', flex: 1 }}>
            <Typography variant="body2" sx={{ color: '#00796b', fontSize: '0.75rem' }}>
              Consultorio
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00796b', fontSize: '1rem' }}>
              {doctor.consultorio}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', flex: 2 }}>
            <Typography variant="body2" sx={{ color: '#00796b', fontSize: '0.75rem' }}>
              Horario de atención
            </Typography>
            <Typography variant="body2" sx={{ color: '#00796b', fontSize: '0.75rem' }}>
              {doctor.horario}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const DoctorCards: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchedDoctors: Doctor[] = [
        {
          name: 'Dr. Estebán Quito',
          specialty: 'Medicina General',
          languages: 'Español/Inglés',
          experience: 'Experiencia: 5 años',
          education: 'Egresado de la Unisar',
          consultorio: '01',
          horario: 'Lunes a Viernes de 7:00 a 15:00',
          image: 'https://centrodolordecabeza.com/wp-content/uploads/2020/08/perfil-doctor-joe-munoz_2020.jpg',
        },
        {
          name: 'Dr. María López',
          specialty: 'Cardiología',
          languages: 'Español',
          experience: 'Experiencia: 10 años',
          education: 'Egresada de la Unisar',
          consultorio: '02',
          horario: 'Lunes a Viernes de 8:00 a 16:00',
          image: 'https://centrodolordecabeza.com/wp-content/uploads/2020/08/perfil-doctor-joe-munoz_2020.jpg',
        },
        {
          name: 'Dr. Juan Pérez',
          specialty: 'Dermatología',
          languages: 'Español/Inglés',
          experience: 'Experiencia: 7 años',
          education: 'Egresado de la Unisar',
          consultorio: '03',
          horario: 'Lunes a Viernes de 9:00 a 17:00',
          image: 'https://centrodolordecabeza.com/wp-content/uploads/2020/08/perfil-doctor-joe-munoz_2020.jpg',
        },
        {
          name: 'Dr. Juan Pérez',
          specialty: 'Dermatología',
          languages: 'Español/Inglés',
          experience: 'Experiencia: 7 años',
          education: 'Egresado de la Unisar',
          consultorio: '03',
          horario: 'Lunes a Viernes de 9:00 a 17:00',
          image: 'https://centrodolordecabeza.com/wp-content/uploads/2020/08/perfil-doctor-joe-munoz_2020.jpg',
        },
        
      ];
      setDoctors(fetchedDoctors);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container spacing={4} sx={{ padding: 4, justifyContent: 'center' }}>
      {doctors.map((doctor, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
          <DoctorCard doctor={doctor} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DoctorCards;
