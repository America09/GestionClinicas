import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from "../Components/Sidebar";
import { Header } from "../Components/Header";
import Box from '@mui/material/Box';

export const MainLayout = () => {
    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', height: '100vh', marginTop:7 }}>
                <Sidebar />
                <Box component="main">
                    <Outlet />
                </Box>
            </Box>
        </>
    )
}
