import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ListConsultorios } from '../Components/CrudListaConsultorio/List';

export const Consultorios = () => {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      
      <Typography variant="h4" component="h2" gutterBottom>
        Lista de Consultorios
      </Typography>
      <ListConsultorios />
      <Button 
        variant="contained"
        sx={{
          bgcolor: '#43A49B',
          color: 'white',
          textTransform: 'capitalize',
          '&:hover': {
            bgcolor: '#51C5BA',
          },
          mt: 2,
        }}
        onClick={() => navigate("/agregar-consultorios")}
      >
        + Añadir Consultorios
      </Button>
    </Box>
  );
};
