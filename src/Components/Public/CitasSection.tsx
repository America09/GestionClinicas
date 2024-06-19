import { Box, Typography, Link } from '@mui/material';

const CitasSection = () => {
    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#408D86', mt: 8 }}>
            <Box sx={{ width: '50%', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <img src="/doctorBrazo.png" alt="Citas Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ width: '50%', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box' }}>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: 'white' }}>
                    Citas
                </Typography>
                <Typography variant="h5" component="h3" gutterBottom sx={{ textAlign: 'left', color: 'white' }}>
                    Agenda tu cita
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify', fontSize: '1.2rem', color: 'white' }}>
                    Programar una cita con uno de nuestros profesionales de la salud es rápido y sencillo.
                    Simplemente selecciona el día y la hora que mejor se ajuste a tu agenda, y nuestro sistema
                    te conectará automáticamente con un médico disponible.
                </Typography>
                <Link href="/citas" sx={{ color: 'white', textDecoration: 'underline', mt: 2, alignSelf: 'flex-end' }}>
                    Agendar cita
                </Link>
            </Box>
        </Box>
    );
};

export default CitasSection;
