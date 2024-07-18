import { Box, Grid, Paper } from "@mui/material";

export const ServiciosComponent = () => {
  return (
    <Box sx={{ p: { xs: 2, sm: 4 } }}>
      <Box sx={{ mb: 4 }}>
        <img src="image13.png" alt="Equipamiento médico" style={{ width: "100%", height: "auto", borderRadius: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} />
      </Box>
      <Grid container spacing={4} alignItems="center">
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                borderRadius: '16px',
                height: 400,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(/image${14 + index}.png)`,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
