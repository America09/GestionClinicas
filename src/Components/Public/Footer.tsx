import { Box, Typography, Link, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#263339', color: 'white', p: { xs: 2, sm: 4 }, mt: 8 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <img src={logo} alt="Logo" style={{ width: '180px', height: 'auto', margin: '30px auto 0', display: 'block' }} />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography  sx={{ fontWeight: 'bold',textAlign: { xs: 'center', sm: 'left' } }}>NAVEGACIÓN</Typography>
                    <Link href="/" sx={{ color: 'white', display: 'block', mt: 2, textDecoration: 'underline', textAlign: { xs: 'center', sm: 'left' } }}>Inicio</Link>
                    <Link href="/servicios" sx={{ color: 'white', display: 'block', mt: 2, textDecoration: 'underline', textAlign: { xs: 'center', sm: 'left' } }}>Servicios</Link>
                    <Link href="/citas" sx={{ color: 'white', display: 'block', mt: 2, textDecoration: 'underline', textAlign: { xs: 'center', sm: 'left' } }}>Citas</Link>
                    <Link href="/medicos" sx={{ color: 'white', display: 'block', mt: 2, textDecoration: 'underline', textAlign: { xs: 'center', sm: 'left' } }}>Médicos</Link>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography  sx={{ fontWeight: 'bold',textAlign: { xs: 'center', sm: 'left' } }}>LEGAL</Typography>
                    <Link href="/terminos" sx={{ color: 'white', display: 'block', mt: 2, textDecoration: 'underline', textAlign: { xs: 'center', sm: 'left' } }}>Términos y condiciones</Link>
                    <Link href="/politicas" sx={{ color: 'white', display: 'block', mt: 2, textDecoration: 'underline', textAlign: { xs: 'center', sm: 'left' } }}>Políticas de privacidad</Link>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Typography  sx={{ fontWeight: 'bold', textAlign: { xs: 'center', sm: 'left' } }}>NOSOTROS</Typography>
                    <Link href="/nosotros" sx={{ color: 'white', display: 'block', mt: 2, textDecoration: 'underline', textAlign: { xs: 'center', sm: 'left' } }}>Sobre nosotros</Link>
                    <Link href="/contacto" sx={{ color: 'white', display: 'block', mt: 2, textDecoration: 'underline', textAlign: { xs: 'center', sm: 'left' } }}>Contacto</Link>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography  sx={{ fontWeight: 'bold', textAlign: { xs: 'center', sm: 'left' } }}>SOCIAL</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                        <EmailIcon />
                        <Typography sx={{ ml: 1 }}>info@citasmedicas.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                        <PhoneIcon />
                        <Typography sx={{ ml: 1 }}>99 81 41 95 89</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                        <FacebookIcon />
                        <Typography sx={{ ml: 1 }}>
                            <Link href="https://www.facebook.com" sx={{ color: 'white', textDecoration: 'underline' }}>Facebook</Link>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                        <InstagramIcon />
                        <Typography sx={{ ml: 1 }}>
                            <Link href="https://www.instagram.com" sx={{ color: 'white', textDecoration: 'underline' }}>Instagram</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box borderBottom={2} borderColor="white" sx={{ mt: 8, mx: { xs: 2, sm: 20 }, boxShadow: 5 }} />
            <Typography sx={{ textAlign: 'center', mt: 4 }}>
                © Gestor de Clínicas. Todos los derechos reservados.
            </Typography>
        </Box>
    );
};

export default Footer;
