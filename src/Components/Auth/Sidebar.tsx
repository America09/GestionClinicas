import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';

const menuItems = [
    { icon: <HomeOutlinedIcon fontSize="medium" />, label: 'Inicio', route: '/dashboard' },
    { icon: <MedicalServicesOutlinedIcon fontSize="medium" />, label: 'Especialidad', route: '/admin-especialidad' },
    { icon: <PermContactCalendarOutlinedIcon fontSize="medium" />, label: 'Consultorios', route: '/admin-consultorios' },
    { icon: <PendingActionsOutlinedIcon fontSize="medium" />, label: 'Citas', route: '/admin-citas' },
    { icon: <PermIdentityOutlinedIcon fontSize="medium" />, label: 'Pacientes', route: '/admin-Listpacientes' },
    { icon: <Person3OutlinedIcon fontSize="medium" />, label: 'Médicos', route: '/admin-medicos' },
    { icon: <EventAvailableOutlinedIcon fontSize="medium" />, label: 'Horarios', route: '/admin-horarios' },
];

const drawerWidth = 200;

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <List sx={{ padding: 0 }}>
            {menuItems.map((item, index) => (
                <ListItem
                    button
                    key={index}
                    onClick={() => navigate(item.route)}
                    selected={location.pathname === item.route}
                    sx={{ color: '#fff', marginBottom: 2 }} // Adding marginBottom for spacing
                >
                    <ListItemIcon sx={{ color: '#fff', minWidth: '40px' }}>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} sx={{ '& .MuiTypography-root': { fontWeight: 300 } }} />
                </ListItem>
            ))}
        </List>
    );
};

export default Sidebar;
