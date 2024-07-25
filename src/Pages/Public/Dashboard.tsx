import * as React from 'react';
import { Card, CardContent, Typography, Grid, Box, Button, Paper, Divider } from '@mui/material';
import { Chart } from 'react-google-charts';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const dailyData = [
        ['Día', 'Citas'],
        ['Lunes', 10],
        ['Martes', 14],
        ['Miércoles', 8],
        ['Jueves', 17],
        ['Viernes', 9],
        ['Sábado', 6],
        ['Domingo', 0],
    ];

    const monthlyData = [
        ['Mes', 'Citas'],
        ['Enero', 100],
        ['Febrero', 120],
        ['Marzo', 130],
        ['Abril', 90],
        ['Mayo', 110],
        ['Junio', 150],
        ['Julio', 140],
    ];

    const dailyOptions = {
        title: 'Número de Citas por Día',
        hAxis: { title: 'Día de la Semana' },
        vAxis: { title: 'Número de Citas' },
        legend: 'none',
        colors: ['#408D86'],
    };

    const monthlyOptions = {
        title: 'Número de Citas por Mes',
        hAxis: { title: 'Mes' },
        vAxis: { title: 'Número de Citas' },
        legend: 'none',
        colors: ['#408D86'],
    };

    const kpiStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
        borderRadius: 1,
        backgroundColor: '#408D86',
        color: 'primary.contrastText',
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography sx={{ fontWeight: 'bold', color: '#263339', textTransform: 'uppercase', fontSize: 24, textAlign: 'center' }}>
                Bienvenido a tu plataforma de Administrador
            </Typography>

            <Grid container spacing={4} sx={{ marginTop: 3, justifyContent: 'center' }}>
                <Grid item xs={12} md={4}>
                    <Paper sx={kpiStyle}>
                        <Typography variant="h6">Total Citas</Typography>
                        <Typography variant="h4">450</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={kpiStyle}>
                        <Typography variant="h6">Usuarios Activos</Typography>
                        <Typography variant="h4">120</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={kpiStyle}>
                        <Typography variant="h6">Médicos Disponibles</Typography>
                        <Typography variant="h4">15</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={2}>
                                <EventNoteIcon sx={{ mr: 1, color: '#408D86' }} />
                                <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} color="text.primary">
                                    Número de Citas por Día
                                </Typography>
                            </Box>
                            <Chart
                                chartType="BarChart"
                                width="100%"
                                height="300px"
                                data={dailyData}
                                options={dailyOptions}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" mb={2}>
                                <EventNoteIcon sx={{ mr: 1, color: '#408D86' }} />
                                <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} color="text.primary">
                                    Número de Citas por Mes
                                </Typography>
                            </Box>
                            <Chart
                                chartType="ColumnChart"
                                width="100%"
                                height="300px"
                                data={monthlyData}
                                options={monthlyOptions}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ mt: 3, mb: 2, backgroundColor: '#408D86', color: 'white', '&:hover': { backgroundColor: '#004d50' } }}
                        onClick={() => navigate('/admin-roles')}
                    >
                        Gestionar Roles
                    </Button>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ mt: 3, mb: 2, backgroundColor: '#408D86', color: 'white', '&:hover': { backgroundColor: '#004d50' } }}
                        onClick={() => navigate('/admin-rolespermisos')}
                    >
                        Gestionar permisos
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
