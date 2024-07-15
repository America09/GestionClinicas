import * as React from 'react';
import { Box, Container, Grid, Button, Typography, TextField } from '@mui/material';

export const AgregarEspecialidad: React.FC = () => {
    const [nombre, setNombre] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');

    const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(event.target.value);
    };

    const handleDescripcionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescripcion(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, guardarlo en un estado o enviarlo a una API
        console.log({ nombre, descripcion });
    };

    return (
        <Box sx={{ textAlign: 'center', backgroundColor: '#f5f5f5', p: 3, borderRadius: '8px', flexGrow: 1 }}>
            <Container sx={{ backgroundColor: '#fff', py: 4, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <Typography variant="h4" gutterBottom align="center">
                    Agregar Especialidad
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { marginBottom: 2 },
                        '& .MuiButton-root': { marginTop: 2 },
                        textAlign: 'center',
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="nombre"
                                label="Nombre de la Especialidad"
                                value={nombre}
                                onChange={handleNombreChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="descripcion"
                                label="Descripción"
                                value={descripcion}
                                onChange={handleDescripcionChange}
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Guardar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};
