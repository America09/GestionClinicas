import { Box, Typography } from '@mui/material';

const EducacionSection = () => {
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
          src="/doctoraFrutas.png"
          alt="Educacion Image"
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
          Educación alimentaria
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
          Una buena nutrición garantiza que el cuerpo reciba los nutrientes necesarios para funcionar correctamente.
          Estos incluyen vitaminas, minerales, carbohidratos, proteínas y grasas. Cada uno de estos nutrientes desempeña
          un papel importante en el mantenimiento de la salud y el bienestar general.
        </Typography>
      </Box>
    </Box>
  );
};

export default EducacionSection;
