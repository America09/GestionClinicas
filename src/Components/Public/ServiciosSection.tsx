import { Box, Typography, Link } from '@mui/material';

const ServiciosSection = () => {
    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#408D86', mt: 8 }}>
            <Box sx={{ width: '50%', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <img src="/doctoraSaludandoNina.png" alt="First Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ width: '50%', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box' }}>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: 'white' }}>
                    Servicios
                </Typography>
                <Typography variant="h5" component="h3" gutterBottom sx={{ textAlign: 'left', color: 'white' }}>
                    Laboratorio clínico
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify', fontSize: '1.2rem', color: 'white' }}>
                    En nuestro laboratorio clínico, nos dedicamos a tu salud con profesionalismo y dedicación.
                    Contamos con un equipo especializado de expertos bilingües que están aquí para brindarte atención
                    personalizada y resultados precisos. Tu bienestar es nuestra máxima prioridad, y nos esforzamos
                    por ofrecerte un servicio cálido y humano en cada paso del camino.
                </Typography>
                <Link href="/servicios" sx={{ color: 'white', textDecoration: 'underline', mt: 2, alignSelf: 'flex-end' }}>
                    Ver servicios
                </Link>
            </Box>
        </Box>
    );
};

export default ServiciosSection;
