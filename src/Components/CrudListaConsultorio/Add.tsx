import * as React from 'react';
import Box from '@mui/material/Box';
import { Input, InputLabel, FormControl, Grid, Container, Button, Typography, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const AgregarConsultorios = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                <Link 
                    underline="hover" 
                    color="inherit" 
                    component={RouterLink} 
                    to="/lista-de-consultorios"
                >
                    Lista Consultorios
                </Link>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Typography color="text.primary" variant="h6">
                        Agregar Consultorios
                    </Typography>
                </Box>
            </Breadcrumbs>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Typography variant="h4" component="h1">
                    Agregar Consultorios
                </Typography>
            </Box>
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
                            <InputLabel htmlFor="consultorio">Consultorio</InputLabel>
                            <Input required id="consultorio" />
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
