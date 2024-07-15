import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
/* import { ListHorarios } from '../../Components/Auth/CrudListaHorarios/List'; */
import { ListEspecialidades } from '../../Components/Auth/CrudListaEspecialidades/List';

// Estilizar el botón utilizando `styled` de Material-UI
const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textTransform: 'none',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
    },
}));

const EspecialidadPage = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ textAlign: 'center', backgroundColor: '#f5f5f5', p: 3, borderRadius: '8px' }}>
        <Container sx={{ backgroundColor: '#fff', py: 4, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            
                <ListEspecialidades />
                <CustomButton
                    variant="contained"
                    onClick={() => navigate("/AgregarEspecilidad")}
                >
                + Añadir Especialidad
                </CustomButton>
            
        </Container>
        </Box>
    );
};

export default EspecialidadPage;