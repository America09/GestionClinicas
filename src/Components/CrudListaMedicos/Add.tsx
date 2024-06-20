import * as React from 'react'; 
import Box from '@mui/material/Box';
import { Input, InputLabel, FormControl, Grid, Container } from '@mui/material';

export const AgregarMedicos = () => {
    return (
        <Container>
            <Box
                component="form"
                sx={{
                    '& .MuiFormControl-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="nombre">Nombre</InputLabel>
                            <Input
                                required
                                id="nombre"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="apellido">Apellido</InputLabel>
                            <Input
                                required
                                id="apellido"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="correo-electronico">Correo Electrónico</InputLabel>
                            <Input
                                required
                                id="correo-electronico"
                                type="email"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="telefono">Teléfono</InputLabel>
                            <Input
                                required
                                id="telefono"
                                type="tel"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="fecha-nacimiento">Fecha de Nacimiento</InputLabel>
                            <Input
                                required
                                id="fecha-nacimiento"
                                type="date"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="genero">Género</InputLabel>
                            <Input
                                required
                                id="genero"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="cedula-profesional">Cédula Profesional</InputLabel>
                            <Input
                                required
                                id="cedula-profesional"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="escuela">Escuela</InputLabel>
                            <Input
                                required
                                id="escuela"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="anios-experiencia">Años de Experiencia</InputLabel>
                            <Input
                                required
                                id="anios-experiencia"
                                type="number"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="disponibilidad">Disponibilidad</InputLabel>
                            <Input
                                required
                                id="disponibilidad"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="status">Status</InputLabel>
                            <Input
                                required
                                id="status"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel htmlFor="habilidades">Habilidades</InputLabel>
                            <Input
                                required
                                id="habilidades"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
