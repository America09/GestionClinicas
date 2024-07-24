import { Box, CssBaseline, Drawer, Toolbar } from '@mui/material';
import HeaderAuth from '../Components/Auth/HeaderAuth';
import Sidebar from '../Components/Auth/Sidebar'; 
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

const AuthLayout = () => {
    return (
        <Box sx={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <CssBaseline />
            <HeaderAuth />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#263339',
                    },
                }}
            >
                <Toolbar />
                <Sidebar />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px`, overflow: 'auto' }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default AuthLayout;
