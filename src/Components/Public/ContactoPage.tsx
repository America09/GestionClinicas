import { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Grid, Typography, TextField, Button, CircularProgress, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ContactMen } from '../../Services/Contact'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ name: string; email: string; phone: string; message: string }>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState<string>(''); 
  const [submitError, setSubmitError] = useState<string>(''); 
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let valid = true;
    let errors = { name: '', email: '', phone: '', message: '' };

    if (!name) {
      valid = false;
      errors.name = 'Nombre es requerido';
    } else if (/\d/.test(name)) {
      valid = false;
      errors.name = 'Nombre no debe contener números';
    }

    if (!email) {
      valid = false;
      errors.email = 'Correo es requerido';
    } else if (!validateEmail(email)) {
      valid = false;
      errors.email = 'Correo no válido. Debe contener un "@" y un "."';
    }
    if (!message) {
      valid = false;
      errors.message = 'Mensaje es requerido';
    }

    setErrors(errors);

    if (valid) {
      setIsLoading(true);
      try {
        await ContactMen(name, email, message);
        setSuccess('Mensaje enviado con éxito');
        setName('');
        setEmail('');
        setMessage('');
        setErrors({ name: '', email: '', phone: '', message: '' });
        setSubmitError('');
        toast.success('Mensaje enviado con éxito', {
          position: 'top-right',
        });        
      } catch (error: any) {
        setSubmitError(error.message);
        setSuccess('');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!/\d/.test(value)) {
      setName(value);
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Nombre no debe contener números' }));
    }
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}>
      <ToastContainer />
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
          <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
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
              value={name}
              onChange={handleNameChange}
              error={!!errors.name}
              helperText={errors.name}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={!!errors.message}
              helperText={errors.message}
            />
            <Box sx={{ position: 'relative' }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#408D86', color: 'white', '&:hover': { backgroundColor: '#004d50' } }}
                disabled={isLoading}
              >
                Enviar
              </Button>
              {isLoading && <CircularProgress size={24} sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }} />}
            </Box>
            {submitError && <Typography color="error">{submitError}</Typography>}
            {success && <Typography sx={{ color: 'green' }}>{success}</Typography>}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
