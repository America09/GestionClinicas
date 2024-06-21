import { AppBar, Toolbar, Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const HeaderPublic = () => {
    return (
        <AppBar position="absolute" className="header-public" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link component={NavLink} to="/" style={{ marginLeft: '2rem' , marginTop: 5 }}>
                    <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto'}} />
                </Link>
                </Box>
                <Box sx={{ display: 'flex', gap: '2rem', flexGrow: 1, justifyContent: 'flex-end' }}>
                    <Link component={NavLink} to="/" sx={{ textDecoration: 'underline',  textDecorationColor: 'transparent', color: 'white', fontSize: '1.3rem', fontWeight: 'medium' }}>
                        Inicio
                    </Link>
                    <Link component={NavLink} to="/servicios" sx={{ textDecoration: 'underline',  textDecorationColor: 'transparent', color: 'white', fontSize: '1.3rem', fontWeight: 'medium' }}>
                        Servicios
                    </Link>
                    <Link component={NavLink} to="/citas" sx={{ textDecoration: 'underline',  textDecorationColor: 'transparent', color: 'white', fontSize: '1.3rem', fontWeight: 'medium' }}>
                        Citas
                    </Link>
                    <Link component={NavLink} to="/medicos" sx={{ textDecoration: 'underline',  textDecorationColor: 'transparent', color: 'white', fontSize: '1.3rem', fontWeight: 'medium' }}>
                        Médicos
                    </Link>
                    <Link component={NavLink} to="/login" sx={{ textDecoration: 'underline',  textDecorationColor: 'transparent', color: 'white', fontSize: '1.3rem', fontWeight: 'medium' }}>
                        Login
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderPublic;
