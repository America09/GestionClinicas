import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",height: "100vh",backgroundColor: "#728F9E", display: "flex", justifyContent: "center", alignItems: "center",
      }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img
            src="/phone2.png" alt="enchufe" style={{ height: "300px", maxWidth: "100%" }}/>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Container>
            <Typography
              variant="h1" component="h2" gutterBottom
              sx={{ color: "#ffffff", fontSize: { xs: 100, md: 200 } }}>
            404
            </Typography>
            <Typography variant="h5" component="h3" gutterBottom sx={{ color: "#ffffff", fontWeight: "medium" }}>
            Página no encontrada.
            </Typography>
            <Button variant="text" onClick={() => navigate("/")} sx={{ marginTop: 5, color: "#ffffff" }}>
            Volver al inicio
            </Button>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotFound;
