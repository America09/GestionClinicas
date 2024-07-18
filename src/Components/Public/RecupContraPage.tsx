import { Modal, Box, IconButton, TextField, Button, Divider, Typography, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

// Define las propiedades requeridas
interface RecuperarContrasenaModalProps {
    open: boolean;
    onClose: () => void;
    setOpenSignup: (open: boolean) => void;
}

const RecuperarContrasenaModal: React.FC<RecuperarContrasenaModalProps> = ({ open, onClose, setOpenSignup }) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handleRecuperarContrasena = () => {
        console.log("Recuperar contraseña para:", email);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, 
                bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: '30px', 
                display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <IconButton onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10 }}>
                    <CloseIcon />
                </IconButton>
                <Typography id="modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', marginBottom: 2 }}>
                    Por favor ingrese su correo y enviaremos un link para recuperar su contraseña
                </Typography>
                <Divider sx={{ width: '100%', mb: 2 }} />
                <TextField label="Correo" variant="outlined" fullWidth margin="normal" value={email} onChange={handleEmailChange} />
                <Button onClick={handleRecuperarContrasena} variant="contained" color="primary" 
                    sx={{ mt: 2, bgcolor: '#408D86', color: '#FFFFFF', '&:hover': { bgcolor: '#336B5B' }, borderRadius: '20px', padding: '10px 20px', width: '100%' }}>
                    Enviar
                </Button>
                <Typography variant="body1" component="p" sx={{ textAlign: 'center', marginTop: 3 }}>
                    ¿No tienes cuenta?   
                    <Link component="button" onClick={() => setOpenSignup(true)} sx={{ textDecoration: 'underline', color: '#408D86', marginLeft: 1 }}>
                        Crea una aquí
                    </Link>
                </Typography>
            </Box>
        </Modal>
    );
};

export default RecuperarContrasenaModal;