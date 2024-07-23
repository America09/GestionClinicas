import { Box, Paper, Typography } from "@mui/material";

export const PlantillaPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%', 
        marginTop: 10, 
      }}
    >
      <Paper
        sx={{
          padding: 4, 
          textAlign: 'center',
          width: { xs: '90%', sm: '70%', md: '50%', lg: '90%' },
          boxShadow: 3,
          borderRadius: 2,
          bgColor: '#F3F3F3'
        }}
      >
        <Typography variant="h4" sx={{color:"#263339", fontWeight:'semibold'}}>
        Descripción del Proyecto
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom sx={{textAlign:'justify', p:2}}>
        Este proyecto ha sido desarrollado como una plantilla genérica para clínicas médicas y no está dirigido a ninguna empresa en específico. El propósito de esta plantilla es proporcionar una solución flexible y adaptable que pueda ser utilizada y personalizada por diversas clínicas para satisfacer sus necesidades específicas.
        <br />
        La plantilla incluye funcionalidades y diseños que son comunes en la mayoría de las clínicas, permitiendo su rápida implementación y personalización. 
        <br />
        Debido a su naturaleza genérica, esta plantilla puede ser adquirida y utilizada por múltiples clínicas, ofreciendo una solución eficiente y costeable para mejorar la presencia digital y la gestión de contactos con los pacientes.
        </Typography>
      </Paper>
    </Box>
  );
};
