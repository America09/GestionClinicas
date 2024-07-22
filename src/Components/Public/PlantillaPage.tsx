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
          width: { xs: '90%', sm: '70%', md: '50%', lg: '30%' },
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Proyecto elaborado para plantilla
        </Typography>
      </Paper>
    </Box>
  );
};
