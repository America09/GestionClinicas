import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const CuentaRegistradaExito = () => {
const navigate = useNavigate();

const handleRedirect = () => {
    navigate('/');
};

return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: 'background.paper',
        p: { xs: 2, sm: 4, md: 6 },
        borderRadius: '30px',
        mx: { xs: 2, sm: 'auto' }, 
        maxWidth: { xs: '90%', sm: 400 }, 
        boxShadow: '0px 4px 12px #0000001A', 
    }}
    >
    <CheckCircleIcon sx={{ fontSize: { xs: 40, sm: 60 }, color: '#408D86', mt: 2 }} />
    <Typography
        variant="h6"
        component="h2"
        sx={{ mt: 2, textAlign: 'center', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
    >
        ¡Cuenta Registrada Exitosamente!
    </Typography>
    <Typography
        variant="body2"
        sx={{ mt: 2, textAlign: 'center', fontSize: { xs: '0.9rem', sm: '1rem' } }}
    >
        Tu cuenta ha sido creada satisfactoriamente. Ahora puedes iniciar sesión y disfrutar de nuestros servicios.
    </Typography>
    <Button
        onClick={handleRedirect}
        variant="contained"
        sx={{
        mt: 2,
        bgcolor: '#408D86',
        color: '#FFFFFF',
        '&:hover': { bgcolor: '#336B5B' },
        borderRadius: '20px',
        padding: { xs: '8px 16px', sm: '10px 20px' },
        width: { xs: '100%', sm: 'auto' },
        }}
    >
        Aceptar
    </Button>
    </Box>
);
};

export default CuentaRegistradaExito;
