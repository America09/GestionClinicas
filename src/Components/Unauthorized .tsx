import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Unauthorized: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/'); 
    };

    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
            <Box sx={{ mb: 4 }}>
                <Typography 
                    variant="h3" 
                    component="h1" 
                    gutterBottom 
                    sx={{ fontWeight: 'bold', color: '#d32f2f' }}
                >
                    No autorizado
                </Typography>
                <Typography 
                    variant="body1" 
                    color="textSecondary"
                >
                    No tienes permiso para acceder a esta página.
                </Typography>
            </Box>
            <Button 
                variant="contained" 
                onClick={handleGoBack} 
                sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: '#408D86',
                    color: 'white',
                    '&:hover': { backgroundColor: '#004d50' },
                    padding: '6px 16px',
                    minWidth: '100px',
                    fontSize: '1rem',
                    height: '40px'
                }}
            >
                Volver
            </Button>
        </Container>
    );
};

export default Unauthorized;