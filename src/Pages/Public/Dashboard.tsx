import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
const Dashboard = () => {
    return (
        <div>
            <Typography sx={{marginTop: 5, fontWeight:'bold', color: '#263339', textTransform: 'uppercase', fontSize: 20}}>
                Bienvenido a tu plataforma de Administrador
            </Typography>
            <Box>
            <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Pendientes del día
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2">
          No hay pendientes por ahora.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Más</Button>
      </CardActions>
    </Card>
            </Box>
        </div>
    );
};

export default Dashboard;
