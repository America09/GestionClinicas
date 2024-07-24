import  { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, CssBaseline, IconButton } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const drawerWidth = 240;

const Sidebar = () => {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { icon: <HomeOutlinedIcon />, label: 'Inicio', route: '/dashboard' },
        { icon: <MedicalServicesOutlinedIcon />, label: 'Consultorio', route: '/admin-consultorios' },
        { icon: <PermContactCalendarOutlinedIcon />, label: 'Horarios', route: '/admin-horarios' },
        { icon: <PendingActionsOutlinedIcon />, label: 'Citas', route: '/admin-citas' },
        { icon: <PermIdentityOutlinedIcon />, label: 'Pacientes', route: '/admin-Listpacientes' },
        { icon: <Person3OutlinedIcon />, label: 'Médicos', route: '/admin-medicos' },
        { icon: <EventAvailableOutlinedIcon />, label: 'Horarios', route: '/admin-horarios' },
    ];

    const drawer = (
        <div>
            <Toolbar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
                <Box component="img" src={logo} alt="Logo" sx={{ width: { xs: '40%', md: '40%' }, marginBottom: 2 }} />
                <List sx={{ width: '100%' }}>
                    {menuItems.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                sx={{ justifyContent: 'flex-start' }}
                                onClick={() => navigate(item.route)}
                            >
                                <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.label}
                                    sx={{
                                        color: 'white',
                                        display: { xs: 'none', md: 'block' },
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#263339', color: 'white' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1e1e2d', color: 'white' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

export default Sidebar;
