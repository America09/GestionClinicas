import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Menu, MenuItem, Box, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { fetchContactRecords } from '../../Services/Contact';
import { ContactRecibido } from '../../types/Contact';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: theme.spacing(2),
    width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

interface HeaderAuthProps {
    handleDrawerToggle: () => void;
}

const HeaderAuth: React.FC<HeaderAuthProps> = ({ handleDrawerToggle }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null);
    const [notifications, setNotifications] = useState<ContactRecibido[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadNotifications = async () => {
            try {
                const data = await fetchContactRecords();
                setNotifications(data);
            } catch (error) {
                console.error('Error al cargar las notificaciones', error);
            }
        };

        loadNotifications();
    }, []);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleNotificationMenu = (event: React.MouseEvent<HTMLElement>) => {
        setNotificationAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setNotificationAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        sessionStorage.removeItem('token'); 
        navigate('/');
        handleClose();
    };

    const handleNotificationClick = () => {
        navigate('/contact-messages');
        handleClose();
    };

    const isMenuOpen = Boolean(anchorEl);
    const isNotificationMenuOpen = Boolean(notificationAnchorEl);

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#263339' }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    App Name
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Buscar…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <IconButton
                    size="large"
                    aria-label="show notifications"
                    aria-controls={isNotificationMenuOpen ? 'primary-notification-menu' : undefined}
                    aria-haspopup="true"
                    onClick={handleNotificationMenu}
                    color="inherit"
                >
                    <Badge badgeContent={notifications.filter(notification => !notification.read).length} color="error">
                        <NotificationsIcon sx={{ fontSize: 30 }} />
                    </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={isMenuOpen ? 'primary-search-account-menu' : undefined}
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    sx={{ ml: 2 }}
                >
                    <AccountCircle sx={{ fontSize: 30 }} />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={isMenuOpen}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
                </Menu>
                <Menu
                    anchorEl={notificationAnchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={isNotificationMenuOpen}
                    onClose={handleClose}
                >
                    {notifications.length === 0 && <MenuItem>No hay notificaciones</MenuItem>}
                    {notifications.map((notification) => (
                        <MenuItem 
                            key={notification.id} 
                            onClick={handleNotificationClick}
                            sx={{ backgroundColor: notification.read ? 'inherit' : '#f5f5f5' }}
                        >
                            <strong>Mensaje</strong> {notification.read ? '' : 'nuevo'}
                        </MenuItem>
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderAuth;
