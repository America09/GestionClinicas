import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactForm = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
      <Grid container spacing={2} sx={{ maxWidth: 900, boxShadow: 3, borderRadius: 3, overflow: 'hidden', backgroundColor: 'white' }}>
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <img
            src="https://www.tijuanaenlinea.com/wp-content/uploads/2022/05/Gobierno-Federal-Salud-Medicos-Mexicanos.jpg"
            alt="Doctor"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', color: '#408D86' }}>
            Contáctanos
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <WhatsAppIcon sx={{ color: '#25D366', marginRight: 1 }} />
            <Typography variant="body1">998 891 5200</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <EmailIcon sx={{ color: '#408D86', marginRight: 1 }} />
            <Typography variant="body1">info@citasmedicas.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <FacebookIcon sx={{ color: '#3b5998', marginRight: 1 }} />
            <Link href="https://www.facebook.com" target="_blank" rel="noopener" sx={{ color: '#3b5998', textDecoration: 'none' }}>
              <Typography variant="body1">Facebook</Typography>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <InstagramIcon sx={{ color: '#E4405F', marginRight: 1 }} />
            <Link href="https://www.instagram.com" target="_blank" rel="noopener" sx={{ color: '#E4405F', textDecoration: 'none' }}>
              <Typography variant="body1">Instagram</Typography>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <TwitterIcon sx={{ color: '#1DA1F2', marginRight: 1 }} />
            <Link href="https://www.twitter.com" target="_blank" rel="noopener" sx={{ color: '#1DA1F2', textDecoration: 'none' }}>
              <Typography variant="body1">Twitter</Typography>
            </Link>
          </Box>
          <Box component="form" sx={{ mt: 3 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nombre"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Teléfono"
              name="phone"
              autoComplete="phone"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="message"
              label="Mensaje"
              name="message"
              autoComplete="message"
              multiline
              rows={4}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#408D86', color: 'white', '&:hover': { backgroundColor: '#004d50' } }}
            >
              Enviar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
