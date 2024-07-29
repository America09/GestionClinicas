import { List, ListItem, ListItemIcon, ListItemText, CssBaseline, Drawer, Box, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import logo from '../../assets/logo.png';

const drawerWidth = 140;

export const Sidebar = () => {
  const navigate = useNavigate();
  const icons = [
    <HomeOutlinedIcon fontSize="large" onClick={() => navigate('/Inicio')} />,
    <MedicalServicesOutlinedIcon fontSize="large" onClick={() => navigate('/MedicalServices')} />,
    <PermContactCalendarOutlinedIcon fontSize="large" onClick={() => navigate('/ContactCalendar')} />,
    <PendingActionsOutlinedIcon fontSize="large" onClick={() => navigate('/admin-horarios')} />,
    <PermIdentityOutlinedIcon fontSize="large" onClick={() => navigate('/lista-de-pacientes')} />,
    <Person3OutlinedIcon fontSize="large" onClick={() => navigate('/Doctor')} />,
    <EventAvailableOutlinedIcon fontSize="large" onClick={() => navigate('/admin-especialidades')} />,
  ];

  const getLogoStyle = () => ({
    width: '40%',
    marginBottom: '10px',
    position: 'absolute',
    top: 20,
    left: '50%',
    transform: 'translateX(-50%)',
  });

  const drawer = (
    <div style={{ color: 'white', backgroundColor: '#263339', height: '100%', position: 'relative' }}>
      <Toolbar />
      <Box component="img" src={logo} alt="Hero" sx={getLogoStyle()} />
      <List style={{ paddingTop: '35px' }}>
        {['Inicio', 'Servicios Médicos', 'Calendario de Contacto', 'Horarios', 'Pacientes', 'Doctor', 'Especialidades'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemIcon sx={{ color: 'white', fontSize: 30, margin: 1.2, marginLeft: '30px' }}>
              {icons[index]}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '@media (max-width: 600px)': {
            width: '70px',
          },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#263339',
              '@media (max-width: 600px)': {
                width: '70px',
              },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
