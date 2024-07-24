import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh", 
        backgroundColor: "#A4BBBB",
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden" 
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: { xs: 5, md: 10 } }}>
              <Typography
                variant="h1"
                component="span"
                gutterBottom
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "4rem", sm: "6rem", md: "8rem", lg: "10rem" },
                  fontWeight: "semibold",
                }}
              >
                4
              </Typography>
              <SettingsIcon
                sx={{
                  fontSize: { xs: "4rem", sm: "6rem", md: "8rem", lg: "10rem" },
                  color: "#ffffff",
                  marginBottom: { xs: 4, md: 6 },
                  mx: { xs: 0.5, md: 1 },
                }}
              />
              <Typography
                variant="h1"
                component="span"
                gutterBottom
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "4rem", sm: "6rem", md: "8rem", lg: "10rem" },
                  fontWeight: "semibold",
                }}
              >
                4
              </Typography>
            </Box>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{
                color: "#ffffff",
                fontWeight: "medium",
                marginBottom: { xs: 2, md: 3 },
              }}
            >
              Oopsi! La página que buscas no fue encontrada.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/")}
              sx={{
                marginTop: { xs: 2, md: 3 },
                backgroundColor: "#ffffff",
                borderRadius: '10px',
                color: "#728F9E",
                '&:hover': {
                  backgroundColor: "#ffffffcc",
                },
              }}
            >
              Volver al inicio
            </Button>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotFound;
