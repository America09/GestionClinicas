import { Box, CssBaseline, Drawer, Toolbar } from '@mui/material';
import HeaderAuth from '../Components/Auth/HeaderAuth';
import Sidebar from '../Components/Auth/Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const drawerWidth = 200;

const AuthLayout = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <CssBaseline />
            <HeaderAuth handleDrawerToggle={handleDrawerToggle} />
            <Drawer
                variant="permanent"
                sx={{
                    width: { sm: drawerWidth },
                    flexShrink: { sm: 0 },
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#263339',
                    },
                    display: { xs: 'none', sm: 'block' }
                }}
            >
                <Toolbar />
                <Sidebar />
            </Drawer>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#263339',
                    },
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Toolbar />
                <Sidebar />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: { sm: `${drawerWidth}px` }, overflow: 'auto' }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default AuthLayout;
