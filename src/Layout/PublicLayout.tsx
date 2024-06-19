import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import HeaderPublic from '../Components/Public/HeaderPublic';
import Footer from '../Components/Public/Footer';
import '../styles/HeaderPublic.css';

const PublicLayout = () => {
    return (
        <Box>
            <HeaderPublic />
            <Box className="header-background" sx={{ position: 'relative', width: '100%', height: '90vh' }}>
                <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                    <source src="/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Box className="header-content" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h2">¡Cuida la salud de tus pacientes con precisión y eficiencia!</Typography>
                </Box>
            </Box>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Outlet />
            </Box>
                <Footer/>
        </Box>
    );
};

export default PublicLayout;
