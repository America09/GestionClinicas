import * as React from 'react';
import Box from '@mui/material/Box';
import { Input, InputLabel, FormControl, Grid, Container, Button, Typography, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const AgregarMedicos = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 9.5 }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                <Link 
                    underline="hover" 
                    color="inherit" 
                    component={RouterLink} 
                    to="/lista-de-medicos"
                >
                    Lista Médicos
                </Link>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Typography color="text.primary" sx={{ textAlign: 'center' }}>Agregar Médicos</Typography>
                </Box>
            </Breadcrumbs>
            <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
                Agregar Médicos
            </Typography>
            <Box
                component="form"
                sx={{
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
                noValidate
                autoComplete="off"
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="nombre">Nombre</InputLabel>
                            <Input required id="nombre" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="apellido">Apellido</InputLabel>
                            <Input required id="apellido" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="correo-electronico">Correo Electrónico</InputLabel>
                            <Input required id="correo-electronico" type="email" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="telefono">Teléfono</InputLabel>
                            <Input required id="telefono" type="tel" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="fecha-nacimiento">Fecha de Nacimiento</InputLabel>
                            <Input required id="fecha-nacimiento" type="date" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="genero">Género</InputLabel>
                            <Input required id="genero" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="cedula-profesional">Cédula Profesional</InputLabel>
                            <Input required id="cedula-profesional" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="escuela">Escuela</InputLabel>
                            <Input required id="escuela" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="anios-experiencia">Años de Experiencia</InputLabel>
                            <Input required id="anios-experiencia" type="number" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="disponibilidad">Disponibilidad</InputLabel>
                            <Input required id="disponibilidad" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="status">Status</InputLabel>
                            <Input required id="status" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="habilidades">Habilidades</InputLabel>
                            <Input required id="habilidades" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                            variant="contained" 
                            sx={{
                                bgcolor: '#43A49B',
                                color: 'white',
                                textTransform: 'capitalize',
                                '&:hover': {
                                    bgcolor: '#51C5BA',
                                },
                                mt: 3,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                display: 'block',
                            }}
                        >
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
