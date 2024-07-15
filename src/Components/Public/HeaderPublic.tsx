import { useState } from 'react';
import { AppBar, Toolbar, Box, Link, Modal, Typography, Button, TextField, IconButton, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import CrearCuentaModal from './CrearCuentaPage';
import RecuperarContrasenaModal from './RecupContraPage';

const HeaderPublic = () => {
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
    const [openRecuperarContrasena, setOpenRecuperarContrasena] = useState(false);

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

    return (
        <>
            <AppBar position="absolute" className="header-public" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link component={NavLink} to="/" style={{ marginLeft: '2rem', marginTop: 5 }}>
                            <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto' }} />
                        </Link>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '2rem', flexGrow: 1, justifyContent: 'flex-end' }}>
                        <Link component={NavLink} to="/" sx={{ textDecoration: 'underline', color: 'white', fontSize: '1.3rem', fontWeight: 'medium' }}>
                            Inicio
                        </Link>
                        <Link component={NavLink} to="/servicios" sx={{ textDecoration: 'underline', color: 'white', fontSize: '1.3rem', fontWeight: 'medium' }}>
                            Servicios
                        </Link>
                        <Link component={NavLink} to="/citas" sx={{ textDecoration: 'underline', color: 'white', fontSize: '1.3rem', fontWeight: 'medium' }}>
                            Citas
                        </Link>
                        <Link component={NavLink} to="/medicos" sx={{ textDecoration: 'underline', color: 'white', fontSize: '1.3rem', fontWeight: 'medium' }}>
                            Médicos
                        </Link>
                        <Link component="button" onClick={handleOpenLogin} sx={{ textDecoration: 'underline', color: 'white', fontSize: '1.3rem', fontWeight: 'medium', background: 'none', border: 'none', cursor: 'pointer' }}>
                            Login
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>

            <Modal open={openLogin} onClose={handleCloseLogin} aria-labelledby="modal-title" aria-describedby="modal-description">
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, 
                    bgcolor: 'background.paper', boxShadow: 50, p: 4, borderRadius: '30px', 
                    display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                        <FacebookIcon sx={{ mr: 1, color: '#3b5998' }} />
                        Continuar con Google
                    </Button>
                    
                    <Divider sx={{ width: '100%', my: 2 }} />
                    <TextField label="Correo" variant="outlined" fullWidth margin="normal" />
                    <TextField label="Contraseña" type="password" variant="outlined" fullWidth margin="normal" />
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'left', width: '100%' }}>
                        Al menos 8 caracteres*
                    </Typography>
                    <Button onClick={handleCloseLogin} variant="contained" color="primary" 
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
                onOpenLogin={handleOpenLogin} // Pasado el prop para abrir el modal de login
            />
            <RecuperarContrasenaModal open={openRecuperarContrasena} onClose={handleCloseRecuperarContrasena} setOpenSignup={setOpenSignup} />
        </>
    );
};

export default HeaderPublic;
