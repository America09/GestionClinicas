import { Box, Typography, Grid, Paper } from '@mui/material';
import { ServiciosComponent } from './ServiciosComponent';

const ServiciosPage = () => {
  return (
    <Box>
      <Typography
        sx={{
          marginTop: 5,
          fontSize: { xs: 30, sm: 40 }, 
          textAlign: 'center',
          color: '#263339',
          fontWeight: 'medium',
        }}
      >
        Servicios y Equipamiento
      </Typography>
      <Grid container spacing={4} sx={{ alignItems: "center", p: { xs: 2, sm: 4, md: 12 } }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Paper
              sx={{
                height: 200,
                backgroundSize: "cover",
                backgroundImage: `url(/image${index + 1}.png)`,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
              }}
            />
          </Grid>
        ))}
      </Grid>
      <ServiciosComponent/>
</Box>

  );
  
};

export default ServiciosPage;
