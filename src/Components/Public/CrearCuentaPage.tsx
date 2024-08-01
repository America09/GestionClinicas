import {
    Modal,
    Box,
    Typography,
    Button,
    TextField,
    IconButton,
    Divider,
    Link,
    Checkbox,
    FormControlLabel,
    Snackbar
  } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';
  import { useState } from 'react';
  import { handleCreateUser } from '../../Handlers/UserHandler';
  import { CreateUserDto } from '../../Types/Api';
  import Swal from 'sweetalert2';
  
  interface CrearCuentaModalProps {
    open: boolean;
    onClose: () => void;
    onOpenLogin: () => void;
  }
  
  const CrearCuentaModal: React.FC<CrearCuentaModalProps> = ({ open, onClose, onOpenLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [touched, setTouched] = useState({
      username: false,
      email: false,
      password: false,
      confirmPassword: false
    });
  
    const handleBlur = (field: keyof typeof touched) => () => {
      setTouched({ ...touched, [field]: true });
    };
  
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setUsername(event.target.value);
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setEmail(event.target.value);
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setPassword(event.target.value);
    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setConfirmPassword(event.target.value);
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setChecked(event.target.checked);
  
    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setTouched({ username: true, email: true, password: true, confirmPassword: true });
  
      if (!username || !email || !password || !confirmPassword || !checked) {
        setError('Todos los campos son obligatorios');
        return;
      }
      if (!validateEmail(email)) {
        setError('El correo electrónico debe ser válido y contener un "@" y un "."');
        return;
      }
      if (password !== confirmPassword) {
        setError('Las contraseñas no coinciden');
        return;
      }
      if (password.length < 8) {
        setError('La contraseña debe tener al menos 8 caracteres');
        return;
      }
  
      setError('');
  
      const createUserRequest: CreateUserDto = {
        username,
        email,
        password
      };
  
      try {
        await handleCreateUser(createUserRequest);
        Swal.fire({
            title: '¡Éxito!',
            text: 'Usuario creado exitosamente. Se ha enviado un correo de confirmación a tu dirección de correo electrónico.',
            icon: 'success',
            timer: 10000,
            timerProgressBar: true, 
            showConfirmButton: true 
          });
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setChecked(false);
        setTouched({
          username: false,
          email: false,
          password: false,
          confirmPassword: false
        });
        onClose();
      } catch (error: any) {
        Swal.fire('Error', error.message || 'Hubo un problema al crear el usuario.', 'error');
      }
    };
  
    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '60%', lg: '40%' },
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: { xs: 2, sm: 3 },
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflowY: 'auto'
          }}
        >
          <IconButton onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10 }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" component="h2" sx={{ mb: 1, color: '#263339', fontWeight: 'semibold' }}>
            Crear cuenta
          </Typography>
          <Divider sx={{ width: '100%', mb: 2 }} />
          <form
            onSubmit={handleSubmit}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <TextField
              label="Nombre de usuario"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={handleUsernameChange}
              required
              error={touched.username && !username}
              helperText={touched.username && !username ? 'El nombre de usuario es obligatorio' : ''}
              onBlur={handleBlur('username')}
              InputProps={{ sx: { fontSize: '0.9rem' } }}
            />
            <TextField
              label="Correo"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={handleEmailChange}
              required
              error={touched.email && !validateEmail(email)}
              helperText={touched.email && !validateEmail(email) ? 'Correo no válido' : ''}
              onBlur={handleBlur('email')}
              InputProps={{ sx: { fontSize: '0.9rem' } }}
            />
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={handlePasswordChange}
              required
              error={touched.password && password.length < 8}
              helperText={
                touched.password && password.length < 8
                  ? 'La contraseña debe tener al menos 8 caracteres'
                  : ''
              }
              onBlur={handleBlur('password')}
              InputProps={{ sx: { fontSize: '0.9rem' } }}
            />
            <TextField
              label="Confirmar Contraseña"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              error={touched.confirmPassword && password !== confirmPassword}
              helperText={
                touched.confirmPassword && password !== confirmPassword
                  ? 'Las contraseñas no coinciden'
                  : ''
              }
              onBlur={handleBlur('confirmPassword')}
              InputProps={{ sx: { fontSize: '0.9rem' } }}
            />
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleCheckboxChange} required />}
              label={
                <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '0.9rem', mt: 1 }}>
                  Al crear una cuenta, acepta los
                  <Link
                    href="/terminos"
                    sx={{ textDecoration: 'underline', color: '#408D86', marginLeft: 1 }}
                  >
                    Términos y Condiciones
                  </Link>
                  y la
                  <Link
                    href="/politicas"
                    sx={{ textDecoration: 'underline', color: '#408D86', marginLeft: 1 }}
                  >
                    Política de Privacidad
                  </Link>
                </Typography>
              }
              sx={{ mt: 1, width: '100%' }}
            />
            {error && (
              <Typography color="error" sx={{ mt: 2, fontSize: '0.9rem' }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                bgcolor: '#408D86',
                color: '#FFFFFF',
                '&:hover': { bgcolor: '#336B5B' },
                borderRadius: '20px',
                padding: '10px 20px',
                width: '100%'
              }}
            >
              Crear Cuenta
            </Button>
          </form>
          <Typography variant="body1" component="p" sx={{ textAlign: 'center', mt: 1, fontSize: '0.9rem' }}>
            ¿Ya tienes cuenta?
            <Link
              onClick={onOpenLogin}
              sx={{
                textDecoration: 'underline',
                color: '#408D86',
                marginLeft: 1,
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Inicia sesión aquí
            </Link>
          </Typography>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
            message="Usuario creado exitosamente"
            action={
              <IconButton size="small" aria-label="close" color="inherit" onClick={() => setSnackbarOpen(false)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        </Box>
      </Modal>
    );
  };
  
  export default CrearCuentaModal;
  