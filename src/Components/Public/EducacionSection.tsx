import { Box, Typography } from '@mui/material';

const EducacionSection = () => {
    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#408D86', mt: 8 }}>
            <Box sx={{ width: '50%', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <img src="/doctoraFrutas.png" alt="Educacion Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ width: '50%', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box' }}>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: 'white' }}>
                    Educación alimentaria
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify', fontSize: '1.2rem', color: 'white' }}>
                    Una buena nutrición garantiza que el cuerpo reciba los nutrientes necesarios para funcionar correctamente.
                    Estos incluyen vitaminas, minerales, carbohidratos, proteínas y grasas. Cada uno de estos nutrientes desempeña
                    un papel importante en el mantenimiento de la salud y el bienestar general.
                </Typography>
            </Box>
        </Box>
    );
};

export default EducacionSection;
