import { Modal, Box, Typography, Button, TextField, IconButton, Divider, Link, Checkbox, FormControlLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';
import { handleCreateUser } from '../../Handlers/AuthHandler';
import { CreateUserRequest } from '../../Types/Api';

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
    const [error, setError] = useState('');
    const [checked, setChecked] = useState(false);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value);
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);

    const handleFacebookLogin = () => {
        console.log("Iniciar sesión con Facebook");
    };

    const handleGoogleLogin = () => {
        console.log("Iniciar sesión con Google");
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        if (!username || !email || !password || !confirmPassword || !checked) {
            setError('Todos los campos son obligatorios');
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            setError('El correo electrónico debe ser válido y contener un "@" y un "."');
            return;
        }
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        setError('');

        const createUserRequest: CreateUserRequest = {
            username,
            email,
            password,
            roleId: 2 // Puedes ajustar esto según tus necesidades
        };

        const success = await handleCreateUser(createUserRequest);
        if (success) {
            console.log('Usuario creado con éxito');
            onClose();
        } else {
            setError('Hubo un error al crear el usuario');
        }
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
                <Button onClick={handleGoogleLogin} variant="outlined" 
                    sx={{ mt: 2, bgcolor: 'transparent', color: '#333333', borderColor: '#ccc', width: '100%', borderRadius: 30, textTransform: 'capitalize' }}>
                    <GoogleIcon sx={{ mr: 1, color: '#DB4437' }} />
                    Continuar con Google
                </Button>
                <Divider sx={{ width: '100%', my: 2 }} />
                <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField 
                        label="Nombre de usuario" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={username} 
                        onChange={handleUsernameChange} 
                        required 
                        error={!username && Boolean(error)}
                        helperText={!username && error}
                    />
                    <TextField 
                        label="Correo" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={email} 
                        onChange={handleEmailChange} 
                        required 
                        error={!email && Boolean(error)}
                        helperText={!email && error}
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
                        error={!password && Boolean(error)}
                        helperText={!password && error}
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
                        error={password !== confirmPassword && Boolean(error)}
                        helperText={password !== confirmPassword && error}
                    />
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'left', width: '100%' }}>
                        Al menos 8 caracteres*
                    </Typography>
                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={handleCheckboxChange} required />}
                        label={
                            <span>
                                Al crear una cuenta, acepta los
                                <Link href="/terminos" sx={{ textDecoration: 'underline', color: '#408D86', marginLeft: 1 }}>
                                    Términos y Condiciones
                                </Link>
                                y la
                                <Link href="/politicas" sx={{ textDecoration: 'underline', color: '#408D86', marginLeft: 1 }}>
                                    Política de Privacidad
                                </Link>
                            </span>
                        }
                        sx={{ mt: 2, width: '100%' }}
                    />
                    {error && (
                        <Typography color="error" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )}
                    <Button type="submit" variant="contained" color="primary" 
                        sx={{ mt: 2, bgcolor: '#408D86', color: '#FFFFFF', '&:hover': { bgcolor: '#336B5B' }, borderRadius: '20px', padding: '10px 20px', width: '100%' }}>
                        Ingresar
                    </Button>
                </form>
                <Typography variant="body1" component="p" sx={{ textAlign: 'center', marginTop: 3 }}>
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
