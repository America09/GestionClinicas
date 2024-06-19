import { Box, Typography, Link, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#2C3E50', color: 'white', p: 4, mt: 8 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={3}>
                    <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6">NAVEGACIÓN</Typography>
                    <Link href="/" sx={{ color: 'white', display: 'block', mt: 1 }}>Inicio</Link>
                    <Link href="/servicios" sx={{ color: 'white', display: 'block', mt: 1 }}>Servicios</Link>
                    <Link href="/citas" sx={{ color: 'white', display: 'block', mt: 1 }}>Citas</Link>
                    <Link href="/medicos" sx={{ color: 'white', display: 'block', mt: 1 }}>Médicos</Link>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6">LEGAL</Typography>
                    <Link href="#" sx={{ color: 'white', display: 'block', mt: 1 }}>Términos y condiciones</Link>
                    <Link href="#" sx={{ color: 'white', display: 'block', mt: 1 }}>Políticas de privacidad</Link>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6">NOSOTROS</Typography>
                    <Link href="#" sx={{ color: 'white', display: 'block', mt: 1 }}>Sobre nosotros</Link>
                    <Link href="#" sx={{ color: 'white', display: 'block', mt: 1 }}>Contacto</Link>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant="h6">SOCIAL</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <EmailIcon />
                        <Typography sx={{ ml: 1 }}>info@citasmedicas.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <PhoneIcon />
                        <Typography sx={{ ml: 1 }}>99 81 41 95 89</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <FacebookIcon />
                        <Typography sx={{ ml: 1 }}>Facebook</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <InstagramIcon />
                        <Typography sx={{ ml: 1 }}>Instagram</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Typography sx={{ textAlign: 'center', mt: 4 }}>
                © Gestor de Clínicas. Todos los derechos reservados
            </Typography>
        </Box>
    );
};

export default Footer;
