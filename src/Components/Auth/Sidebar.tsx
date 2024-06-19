import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import logo from '../../assets/logo.png'
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const drawerWidth = 140;

export const Sidebar = () => {
    const navigate = useNavigate()
    const icons = [
        <span color="primary" onClick={()=> navigate("/Inicio")} ><HomeOutlinedIcon fontSize="large" /></span>,
        <MedicalServicesOutlinedIcon fontSize="large" />,
        <PermContactCalendarOutlinedIcon fontSize="large" />,
        <PendingActionsOutlinedIcon fontSize="large" />,
        <span color="primary" onClick={()=> navigate("/lista-de-pacientes")} ><PermIdentityOutlinedIcon fontSize="large" /></span>,
        <span color="primary" onClick={()=> navigate("/Doctor")} ><Person3OutlinedIcon fontSize="large" /></span>,
        <EventAvailableOutlinedIcon fontSize="large" />
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
                {['Inbox', 'Starred', 'Send email', 'Drafts', 'All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton sx={{ justifyContent: 'center' }}>
                            <ListItemIcon sx={{ color: 'white', fontSize: 30, margin: 1.2, marginLeft: '30px' }}>
                                {icons[index % icons.length]}
                            </ListItemIcon>
                        </ListItemButton>
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
                        width: '70px', // Ancho estrecho para pantallas pequeñas
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
                                width: '70px', // Ancho estrecho para pantallas pequeñas
                            },
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" 
            sx={{ p: 2, background: 'white', height: '100%',
                flexGrow: 1,width: `calc(100vw - ${drawerWidth}px)`,
                '@media (max-width: 600px)': {
                    width: `calc(100vw - 70px)`, // Ancho estrecho para pantallas pequeñas
                }

             }}>
                <Outlet />
            </Box>
        </Box>
    );
}
