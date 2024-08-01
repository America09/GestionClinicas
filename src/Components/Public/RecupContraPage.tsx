import {
    Modal,
    Box,
    IconButton,
    TextField,
    Button,
    Divider,
    Typography,
    Link
  } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';
  import { useState } from 'react';
  import Swal from 'sweetalert2';
  import { handleRequestPasswordReset } from '../../Handlers/UserHandler';
  
  interface RecuperarContrasenaModalProps {
    open: boolean;
    onClose: () => void;
    onOpenSignup: () => void;
  }
  
  const RecuperarContrasenaModal: React.FC<RecuperarContrasenaModalProps> = ({ open, onClose, onOpenSignup }) => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
      setError('');
    };
  
    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleRecuperarContrasena = async () => {
      if (!email) {
        setError('El campo de correo electrónico es obligatorio');
        return;
      }
      if (!validateEmail(email)) {
        setError('El correo electrónico debe ser válido y contener un "@" y un "."');
        return;
      }
  
      try {
        const message = await handleRequestPasswordReset(email);
        Swal.fire('Éxito', message, 'success');
        onClose(); // Cierra el modal tras el éxito
      } catch (error: any) {
        Swal.fire('Error', error.message || 'Hubo un problema al solicitar el cambio de contraseña.', 'error');
      }
    };
  
    return (
      <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 400 },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: { xs: 2, sm: 4 },
            borderRadius: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <IconButton onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10 }}>
            <CloseIcon />
          </IconButton>
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: 'center', marginBottom: 2 }}
          >
            Por favor ingrese su correo y enviaremos un link para recuperar su contraseña
          </Typography>
          <Divider sx={{ width: '100%', mb: 2 }} />
          <TextField
            label="Correo"
            required
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={handleEmailChange}
            error={Boolean(error)}
            helperText={error}
          />
          <Button
            onClick={handleRecuperarContrasena}
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              bgcolor: '#408D86',
              color: '#FFFFFF',
              '&:hover': { bgcolor: '#336B5B' },
              borderRadius: '20px',
              padding: '10px 20px',
              width: '100%'
            }}
          >
            Enviar
          </Button>
          <Typography variant="body1" component="p" sx={{ textAlign: 'center', marginTop: 3 }}>
            ¿No tienes cuenta?
            <Link
              component="button"
              onClick={() => {
                onClose(); // Cierra el modal actual
                onOpenSignup(); // Abre el modal de crear cuenta
              }}
              sx={{
                textDecoration: 'underline',
                color: '#408D86',
                marginLeft: 1,
                cursor: 'pointer'
              }}
            >
              Crea una aquí
            </Link>
          </Typography>
        </Box>
      </Modal>
    );
  };
  
  export default RecuperarContrasenaModal;
  