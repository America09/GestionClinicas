import { Box, Typography, Link, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#263339', color: 'white', p: 4, mt: 8 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={3}>
                    <img src={logo} alt="Logo" style={{ width: '180px', height: 'auto', marginLeft: 60, marginTop:30 }} />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant="h6">NAVEGACIÓN</Typography>
                    <Link href="/"  sx={{ color: 'white', display: 'block', mt: 3, textDecoration: 'underline',  textDecorationColor: 'transparent'}}>Inicio</Link>
                    <Link href="/servicios" sx={{ color: 'white', display: 'block', mt: 3, textDecoration: 'underline',  textDecorationColor: 'transparent'}}>Servicios</Link>
                    <Link href="/citas" sx={{ color: 'white', display: 'block', mt: 3, textDecoration: 'underline',  textDecorationColor: 'transparent' }}>Citas</Link>
                    <Link href="/medicos" sx={{ color: 'white', display: 'block', mt: 3, textDecoration: 'underline',  textDecorationColor: 'transparent' }}>Médicos</Link>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant="h6">LEGAL</Typography>
                    <Link href="#" sx={{ color: 'white', display: 'block', mt: 3, textDecoration: 'underline',  textDecorationColor: 'transparent' }}>Términos y condiciones</Link>
                    <Link href="#" sx={{ color: 'white', display: 'block', mt: 3, textDecoration: 'underline',  textDecorationColor: 'transparent' }}>Políticas de privacidad</Link>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant="h6">NOSOTROS</Typography>
                    <Link href="#" sx={{ color: 'white', display: 'block', mt: 3, textDecoration: 'underline',  textDecorationColor: 'transparent' }}>Sobre nosotros</Link>
                    <Link href="#" sx={{ color: 'white', display: 'block', mt: 3, textDecoration: 'underline',  textDecorationColor: 'transparent' }}>Contacto</Link>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant="h6" >SOCIAL</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, textDecoration: 'underline',  textDecorationColor: 'transparent' }}>
                        <EmailIcon />
                        <Typography sx={{ ml: 1 }}>info@citasmedicas.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                        <PhoneIcon />
                        <Typography sx={{ ml: 1 }}>99 81 41 95 89</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                        <FacebookIcon />
                        <Typography sx={{ ml: 1 }}>
                        <Link href="https://www.facebook.com" sx={{ color: 'white', display: 'block', textDecoration: 'underline',  textDecorationColor: 'transparent' }}>Facebook</Link>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                        <InstagramIcon />
                        <Typography sx={{ ml: 1 }}>
                        <Link href="https://www.facebook.com" sx={{ color: 'white', display: 'block', textDecoration: 'underline',  textDecorationColor: 'transparent' }}>Instagram</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box borderBottom={2} borderColor="white" sx={{marginTop:8, marginLeft:20, marginRight: 20, boxShadow: 5}} />
            <Typography sx={{ textAlign: 'center', mt: 4 }}>
                © Gestor de Clínicas. Todos los derechos reservados.
            </Typography>
        </Box>
    );
};

export default Footer;
