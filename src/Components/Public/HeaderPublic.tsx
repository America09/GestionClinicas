import { AppBar, Toolbar, Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const HeaderPublic = () => {
    return (
        <AppBar position="absolute" className="header-public" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto', marginRight: 'auto' }} />
                </Box>
                <Box sx={{ display: 'flex', gap: '2rem', flexGrow: 1, justifyContent: 'flex-end' }}>
                    <Link component={NavLink} to="/" sx={{ textDecoration: 'none', color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Inicio
                    </Link>
                    <Link component={NavLink} to="/servicios" sx={{ textDecoration: 'none', color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Servicios
                    </Link>
                    <Link component={NavLink} to="/citas" sx={{ textDecoration: 'none', color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Citas
                    </Link>
                    <Link component={NavLink} to="/medicos" sx={{ textDecoration: 'none', color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Médicos
                    </Link>
                    <Link component={NavLink} to="/login" sx={{ textDecoration: 'none', color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Login
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderPublic;
