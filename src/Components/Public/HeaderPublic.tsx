import { useState, useContext, ChangeEvent, MouseEvent, KeyboardEvent } from 'react';
import { AppBar, Toolbar, Box, Link, Modal, Typography, Button, TextField, Divider, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import CrearCuentaModal from './CrearCuentaPage';
import RecuperarContrasenaModal from './RecupContraPage';
import { AuthContext } from '../../Context/AuthContext';
import { handleLogin } from '../../Handlers/AuthHandler';
import { LoginRequest } from '../../Types/Api';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import EventIcon from '@mui/icons-material/Event';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LoginIcon from '@mui/icons-material/Login';

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

    const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
        if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
            return;
        }
        setOpenDrawer(open);
    };

    const drawerContent = (
        <Box
            sx={{
                width: 200,
                padding: 2,
                height: '100vh',
                backgroundColor: '#508D86',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start' 
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h6" sx={{ ml: 2 }}>Menú</Typography>
                <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {[
                    { text: 'Inicio', icon: <HomeIcon />, link: '/' },
                    { text: 'Servicios', icon: <BusinessIcon />, link: '/servicios' },
                    { text: 'Citas', icon: <EventIcon />, link: '/citas' },
                    { text: 'Medicos', icon: <MedicalServicesIcon />, link: '/medicos' },
                    { text: 'Login', icon: <LoginIcon />, link: '#', action: handleOpenLogin }
                ].map((item) => (
                    <ListItem
                        sx={{ color: 'white' }}
                        key={item.text}
                        button
                        component={item.text === 'Login' ? 'button' : NavLink}
                        to={item.text === 'Login' ? undefined : item.link}
                        onClick={item.text === 'Login' ? item.action : undefined}
                    >
                        <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const validateEmail = (email: string) => {
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
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                color: 'white',
                                fontSize: '1.5rem',
                                fontWeight: 'medium',
                                borderBottom: isActive ? '2px solid white' : 'none',
                                paddingBottom: '5px',
                            })}
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/servicios"
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                color: 'white',
                                fontSize: '1.5rem',
                                fontWeight: 'medium',
                                borderBottom: isActive ? '2px solid white' : 'none',
                                paddingBottom: '5px',
                            })}
                        >
                            Servicios
                        </NavLink>
                        <NavLink
                            to="/citas"
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                color: 'white',
                                fontSize: '1.5rem',
                                fontWeight: 'medium',
                                borderBottom: isActive ? '2px solid white' : 'none',
                                paddingBottom: '5px',
                            })}
                        >
                            Citas
                        </NavLink>
                        <NavLink
                            to="/medicos"
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                color: 'white',
                                fontSize: '1.5rem',
                                fontWeight: 'medium',
                                borderBottom: isActive ? '2px solid white' : 'none',
                                paddingBottom: '5px',
                            })}
                        >
                            Médicos
                        </NavLink>
                        <Link component="button" onClick={handleOpenLogin} sx={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem', fontWeight: 'medium', background: 'none', border: 'none', cursor: 'pointer' }}>
                            Login
                        </Link>
                    </Box>
                    <IconButton edge="start" color="inherit" aria-label="menú" onClick={toggleDrawer(true)} sx={{ display: { md: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
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
                    width: { xs: '90%', sm: '80%', md: '60%', lg: '40%' },
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
                    <Typography sx={{fontSize: 30, color:"#263339", fontWeight: "semibold"}}>
                        Inicio de sesión
                    </Typography>
                    <Divider sx={{ width: '100%', my: 2 }} />
                    <TextField
                        label="Correo"
                        variant="outlined"
                        required
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        error={!!passwordError} 
                        helperText={passwordError} 
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
