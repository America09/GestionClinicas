import { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ name: string; email: string; phone: string; message: string }>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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

    if (!phone) {
      valid = false;
      errors.phone = 'Teléfono es requerido';
    } else if (isNaN(Number(phone))) {
      valid = false;
      errors.phone = 'Teléfono no debe contener letras';
    } else if (phone.length !== 10) {
      valid = false;
      errors.phone = 'Teléfono debe tener 10 dígitos';
    }

    if (!message) {
      valid = false;
      errors.message = 'Mensaje es requerido';
    }

    setErrors(errors);

    if (valid) {
      console.log('Formulario enviado');
      // Aquí puedes agregar la lógica para enviar el formulario
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

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) && value.length <= 10) {
      setPhone(value);
      setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: 'Teléfono no debe contener letras y debe tener 10 dígitos' }));
    }
  };

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
              id="phone"
              label="Teléfono"
              name="phone"
              autoComplete="phone"
              value={phone}
              onChange={handlePhoneChange}
              error={!!errors.phone}
              helperText={errors.phone}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 10 }}
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
