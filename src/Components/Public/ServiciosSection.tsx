import { Box, Typography, Link } from '@mui/material';

const ServiciosSection = () => {
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
          src="/doctoraSaludandoNina.png"
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
          Servicios
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{ textAlign: 'left', color: 'white', fontWeight: 'bold' }}
        >
          Laboratorio clínico
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
          En nuestro laboratorio clínico, nos dedicamos a tu salud con profesionalismo y dedicación.
          Contamos con un equipo especializado de expertos bilingües que están aquí para brindarte atención
          personalizada y resultados precisos. Tu bienestar es nuestra máxima prioridad, y nos esforzamos
          por ofrecerte un servicio cálido y humano en cada paso del camino.
        </Typography>
        <Link
          href="/servicios"
          sx={{
            color: 'white',
            textDecoration: 'underline',
            mt: 2,
            alignSelf: { xs: 'center', md: 'flex-end' },
            fontWeight: 'bold',
            '&:hover': { textDecoration: 'none', color: '#80cbc4' },
          }}
        >
          Ver servicios
        </Link>
      </Box>
    </Box>
  );
};

export default ServiciosSection;
