import { Box, Typography, Link } from '@mui/material';

const CitasSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: { xs: 'auto', md: '100vh' },
        backgroundColor: '#408D86',
        mt: 8,
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          boxShadow: { xs: 'none', md: 4 },
        }}
      >
        <img
          src="/doctorBrazo.png"
          alt="First Image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </Box>
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          p: { xs: 3, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: 'center', color: 'white', fontWeight: 'bold', mb: 3 }}
        >
          Citas
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}
        >
          Citas
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            textAlign: 'justify',
            fontSize: { xs: '1rem', md: '1.2rem' },
            color: 'white',
            lineHeight: 1.6,
          }}
        >
          Programar una cita con uno de nuestros profesionales de la salud es rápido y sencillo. Simplemente selecciona el día y la hora que mejor se ajuste a tu agenda, y nuestro sistema te conectará automáticamente con un médico disponible.
        </Typography>
        <Link
          href="/citas"
          sx={{
            color: 'white',
            textDecoration: 'underline',
            mt: 2,
            alignSelf: { xs: 'center', md: 'flex-end' },
            fontWeight: 'bold',
            '&:hover': { textDecoration: 'none', color: '#80cbc4' },
          }}
        >
          Haz una cita
        </Link>
      </Box>
    </Box>
  );
};

export default CitasSection;
