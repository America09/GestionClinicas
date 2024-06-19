import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, Drawer, Toolbar } from '@mui/material';
import { HeaderAuth } from '../Components/Auth/HeaderAuth';
import { Sidebar } from '../Components/Auth/Sidebar';

const drawerWidth = 100;

const AuthLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <HeaderAuth />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Sidebar />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default AuthLayout;
