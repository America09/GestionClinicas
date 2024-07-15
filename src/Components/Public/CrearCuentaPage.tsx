import { Modal, Box, Typography, Button, TextField, IconButton, Divider, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from 'react';

// Define la interfaz para las propiedades del modal
interface CrearCuentaModalProps {
    open: boolean;
    onClose: () => void;
    onOpenLogin: () => void; // Añadido para abrir el modal de login
}

const CrearCuentaModal: React.FC<CrearCuentaModalProps> = ({ open, onClose, onOpenLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

    const handleFacebookLogin = () => {
        console.log("Iniciar sesión con Facebook");
    };

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
            <Box sx={{ 
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, 
                bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: '30px', 
                display: 'flex', flexDirection: 'column', alignItems: 'center' 
            }}>
                <IconButton onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10 }}>
                    <CloseIcon />
                </IconButton>
                <Button onClick={handleFacebookLogin} variant="outlined" 
                    sx={{ mt: 2, bgcolor: 'transparent', color: '#333333', borderColor: '#ccc', width: '100%', borderRadius: 30, textTransform: 'capitalize' }}>
                    <FacebookIcon sx={{ mr: 1, color: '#3b5998' }} />
                    Continuar con Facebook
                </Button>
                <Button onClick={handleFacebookLogin} variant="outlined" 
                    sx={{ mt: 2, bgcolor: 'transparent', color: '#333333', borderColor: '#ccc', width: '100%', borderRadius: 30, textTransform: 'capitalize' }}>
                    <FacebookIcon sx={{ mr: 1, color: '#3b5998' }} />
                    Continuar con Google
                </Button>
                <Divider sx={{ width: '100%', my: 2 }} />
                <TextField label="Correo" variant="outlined" fullWidth margin="normal" value={email} onChange={handleEmailChange} />
                <TextField label="Contraseña" type="password" variant="outlined" fullWidth margin="normal" value={password} onChange={handlePasswordChange} />
                <TextField label="Confirmar Contraseña" type="password" variant="outlined" fullWidth margin="normal" value={password} onChange={handlePasswordChange} />
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'left', width: '100%' }}>
                    Al menos 8 caracteres*
                </Typography>
                <Typography id="modal-title" variant="body1" component="p" sx={{ textAlign: 'center', marginTop: 3 }}>
                    Al crear una cuenta, acepta los
                    <Link href="/terminos" sx={{ textDecoration: 'underline', color: '#408D86', marginLeft: 1 }}>
                        Términos y Condiciones
                    </Link>
                    y la
                    <Link href="/politicas" sx={{ textDecoration: 'underline', color: '#408D86', marginLeft: 1 }}>
                        Política de Privacidad
                    </Link>
                </Typography>
                <Button onClick={onClose} variant="contained" color="primary" 
                    sx={{ mt: 2, bgcolor: '#408D86', color: '#FFFFFF', '&:hover': { bgcolor: '#336B5B' }, borderRadius: '20px', padding: '10px 20px', width: '100%' }}>
                    Ingresar
                </Button>
                <Typography id="modal-title" variant="body1" component="p" sx={{ textAlign: 'center', marginTop: 3 }}>
                    ¿Ya tienes cuenta?
                    <Link onClick={onOpenLogin} sx={{ textDecoration: 'underline', color: '#408D86', marginLeft: 1, cursor: 'pointer' }}>
                        Inicia sesión aquí
                    </Link>
                </Typography>
            </Box>
        </Modal>
    );
};

export default CrearCuentaModal;

