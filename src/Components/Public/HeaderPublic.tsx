import { useState, useContext } from 'react';
import { AppBar, Toolbar, Box, Link, Modal, Typography, Button, TextField, Divider, Hidden, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import CrearCuentaModal from './CrearCuentaPage';
import RecuperarContrasenaModal from './RecupContraPage';
import { AuthContext } from '../../Context/AuthContext';
import { handleLogin } from '../../Handlers/AuthHandler';
import { LoginRequest } from '../../Types/Api';

const HeaderPublic = () => {
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
    const [openRecuperarContrasena, setOpenRecuperarContrasena] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const handleOpenLogin = () => {
        setOpenLogin(true);
        setOpenSignup(false);
        setOpenRecuperarContrasena(false);
    };

    const handleCloseLogin = () => setOpenLogin(false);

    const handleOpenSignup = () => {
        setOpenSignup(true);
        setOpenLogin(false);
        setOpenRecuperarContrasena(false);
    };

    const handleCloseSignup = () => setOpenSignup(false);

    const handleOpenRecuperarContrasena = () => {
        setOpenRecuperarContrasena(true);
        setOpenLogin(false);
        setOpenSignup(false);
    };

    const handleCloseRecuperarContrasena = () => setOpenRecuperarContrasena(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && ((event.key === 'Tab') || (event.key === 'Shift'))) {
            return;
        }
        setOpenDrawer(open);
    };

    const drawerContent = (
        <Box
            sx={{
                width: 250,
                padding: 1.5,
                height: '700px',
                backgroundColor: '#508D86'
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <CloseIcon />
                {['Inicio', 'Servicios', 'Citas', 'Medicos', 'Login'].map((text) => (
                    <ListItem sx={{ color: 'white' }}
                        key={text}
                        button
                        component={text === 'Login' ? 'button' : NavLink}
                        to={text === 'Inicio' ? '/' : `/${text.toLowerCase()}`}
                        onClick={text === 'Login' ? handleOpenLogin : undefined}
                    >
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const onLogin = async () => {
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Correo no válido. Debe contener un "@" y un "."');
            valid = false;
        } else {
            setEmailError('');
        }

        if (password.length < 8) {
            setPasswordError('La contraseña debe tener al menos 8 caracteres');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            const loginRequest: LoginRequest = { email, password };
            const success = await handleLogin(loginRequest, authContext);
            if (success) {
                navigate('/dashboard'); 
            }
        }
    };

    return (
        <>
            <AppBar position="absolute" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link component={NavLink} to="/" sx={{ ml: 2, mt: 1 }}>
                            <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto' }} />
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '5rem', flexGrow: 1, justifyContent: 'center' }}>
                        <Link component={NavLink} to="/" sx={{ textDecoration: 'underline', color: 'white', fontSize: '1.5rem', fontWeight: 'medium' }}>
                            Inicio
                        </Link>
                        <Link component={NavLink} to="/servicios" sx={{ textDecoration: 'underline', color: 'white', fontSize: '1.5rem', fontWeight: 'medium' }}>
                            Servicios
                        </Link>
                        <Link component={NavLink} to="/citas" sx={{ textDecoration: 'underline', color: 'white', fontSize: '1.5rem', fontWeight: 'medium' }}>
                            Citas
                        </Link>
                        <Link component={NavLink} to="/medicos" sx={{ textDecoration: 'underline', color: 'white', fontSize: '1.5rem', fontWeight: 'medium' }}>
                            Médicos
                        </Link>
                        <Link component="button" onClick={handleOpenLogin} sx={{ textDecoration: 'underline', color: 'white', fontSize: '1.5rem', fontWeight: 'medium', background: 'none', border: 'none', cursor: 'pointer' }}>
                            Login
                        </Link>
                    </Box>
                    <Hidden mdUp>
                        <IconButton edge="start" color="inherit" aria-label="menú" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
                {drawerContent}
            </Drawer>

            <Modal open={openLogin} onClose={handleCloseLogin} aria-labelledby="modal-title" aria-describedby="modal-description">
    <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '90%', sm: '80%', md: '60%', lg: '40%', xl: 400 },
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <IconButton onClick={handleCloseLogin} sx={{ position: 'absolute', top: 10, right: 10 }}>
            <CloseIcon />
        </IconButton>
        <Button onClick={handleCloseLogin} variant="outlined"
            sx={{ mt: 2, bgcolor: 'transparent', color: '#333333', borderColor: '#ccc', width: '100%', borderRadius: 30, textTransform: 'capitalize' }}>
            <FacebookIcon sx={{ mr: 1, color: '#3b5998' }} />
            Continuar con Facebook
        </Button>
        <Button onClick={handleCloseLogin} variant="outlined"
            sx={{ mt: 2, bgcolor: 'transparent', color: '#333333', borderColor: '#ccc', width: '100%', borderRadius: 30, textTransform: 'capitalize' }}>
            <GoogleIcon sx={{ mr: 1, color: '#db4437' }} />
            Continuar con Google
        </Button>

        <Divider sx={{ width: '100%', my: 2 }} />
        <TextField
            label="Correo"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
        />
        <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // error={!!passwordError}
            // helperText={passwordError}
        />
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'left', width: '100%' }}>
            Al menos 8 caracteres*
        </Typography>
        <Button onClick={onLogin} variant="contained" color="primary"
            sx={{ mt: 2, bgcolor: '#408D86', color: '#FFFFFF', '&:hover': { bgcolor: '#336B5B' }, borderRadius: '20px', padding: '10px 20px', width: '100%' }}>
            Ingresar
        </Button>
        <Typography id="modal-title" variant="body1" component="p" sx={{ textAlign: 'center', marginTop: 3 }}>
            ¿No tienes cuenta?
            <Link component="button" onClick={handleOpenSignup} sx={{ textDecoration: 'underline', color: '#408D86', marginLeft: 1 }}>
                Crea una aquí
            </Link>
        </Typography>
        <Typography id="modal-title" variant="body1" component="p" sx={{ textAlign: 'center' }}>
            <Link component="button" onClick={handleOpenRecuperarContrasena} sx={{ textDecoration: 'underline', color: '#408D86' }}>
                Recuperar contraseña
            </Link>
        </Typography>
    </Box>
</Modal>


            <CrearCuentaModal
                open={openSignup}
                onClose={handleCloseSignup}
                onOpenLogin={handleOpenLogin} 
            />
            <RecuperarContrasenaModal open={openRecuperarContrasena} onClose={handleCloseRecuperarContrasena} setOpenSignup={setOpenSignup} />
        </>
    );
};

export default HeaderPublic;
