import { Box, Typography, Grid, Paper } from '@mui/material';

const ServiciosPage = () => {
  return (
    <Box>
      <Typography sx={{ marginTop: 5, fontSize: 40, textAlign: 'center', color: '#263339', fontWeight: 'medium' }}>
        Servicios y Equipamiento
      </Typography>
      <Grid container spacing={4} sx={{alignItems:"center", p: 12}}>
        <Grid item xs={3}>
          <Paper sx={{ height: 200, backgroundSize: "cover", backgroundImage: 'url(/image1.png)' }} />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: 200, backgroundSize: "cover", backgroundImage: 'url(/image2.png)' }} />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: 200, backgroundSize: "cover", backgroundImage: 'url(/image3.png)' }} />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: 200, backgroundSize: "cover", backgroundImage: 'url(/image4.png)' }} />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: 200, backgroundSize: "cover", backgroundImage: 'url(/image5.png)' }} />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: 200, backgroundSize: "cover", backgroundImage: 'url(/image6.png)' }} />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: 200, backgroundSize: "cover", backgroundImage: 'url(/image7.png)' }} />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: 200, backgroundSize: "cover", backgroundImage: 'url(/image8.png)' }} />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: 200, backgroundSize: "cover", backgroundImage: 'url(/image9.png)' }} />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: 200, backgroundSize: "cover", backgroundImage: 'url(/image10.png)' }} />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: 200, backgroundSize: "cover", backgroundImage: 'url(/image11.png)' }} />
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: 200, backgroundSize: "cover", backgroundImage: 'url(/image12.png)' }} />
        </Grid>
      </Grid>
      <Box>
      <img src="image13.png" alt="Equipamiento médico" style={{ width: "100%", height: "auto" }} />
    </Box>
      <Grid container spacing={3} sx={{p:4, alignItems:"center"}}>
      <Grid item xs={3} >
        <Paper style={{ borderRadius:20, height: 400, width:300, backgroundSize: "cover", marginTop:40, backgroundImage: 'url(/image14.png)' }}>
        </Paper>
      </Grid>

      <Grid item xs={3} >
        <Paper style={{ borderRadius:20, height: 400, width:300, backgroundSize: "cover", marginTop:40, backgroundImage: 'url(/image15.png)' }}>
        </Paper>
      </Grid>

      <Grid item xs={3} >
        <Paper style={{ borderRadius:20,height: 400, width:300, backgroundSize: "cover", marginTop:40, backgroundImage: 'url(/image16.png)' }}>
        </Paper>
      </Grid>

      <Grid item xs={3} >
        <Paper style={{ borderRadius:20,height: 400, width:300, backgroundSize: "cover", marginTop:40, backgroundImage: 'url(/image17.png)' }}>
        </Paper>
      </Grid>
    </Grid>
    </Box>
  );
};

export default ServiciosPage;
