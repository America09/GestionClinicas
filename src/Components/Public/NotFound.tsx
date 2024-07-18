import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundColor: "#A4BBBB",
        display: "absolute",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 2, sm: 3, md: 4 },
        textAlign: "center",
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <Typography
                variant="h1"
                component="span"
                gutterBottom
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "6rem", sm: "8rem", md: "12rem" },
                  fontWeight: "semibold",
                }}
              >
                4
              </Typography>
              <SettingsIcon
                sx={{
                  fontSize: { xs: "6rem", sm: "8rem", md: "12rem" },
                  color: "#ffffff",
                  marginBottom: 9,
                  mx: 1,
                }}
              />
              <Typography
                variant="h1"
                component="span"
                gutterBottom
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "6rem", sm: "8rem", md: "12rem" },
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
