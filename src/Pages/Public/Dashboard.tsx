import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Chart } from 'react-google-charts';

const Dashboard = () => {
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
        colors: ['#1ABC9C'],
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography sx={{ marginTop: 5, fontWeight: 'bold', color: '#263339', textTransform: 'uppercase', fontSize: 24, textAlign: 'center' }}>
                Bienvenido a tu plataforma de Administrador
            </Typography>
            <Grid container spacing={4} sx={{ marginTop: 3 }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Número de Citas por Día
                            </Typography>
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
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Número de Citas por Mes
                            </Typography>
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
            </Grid>
        </div>
    );
};

export default Dashboard;
