import * as React from 'react';
import { Box, Container, Grid, Button, Typography, MenuItem, TextField } from '@mui/material';

export const AgregarHorario: React.FC = () => {
    const [turno, setTurno] = React.useState('');
    const [entrada, setEntrada] = React.useState('');
    const [salida, setSalida] = React.useState('');

    const handleTurnoChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTurno(event.target.value as string);
    };

    const handleEntradaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEntrada(event.target.value);
    };

    const handleSalidaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSalida(event.target.value);
    };

    return (
        <Box sx={{ textAlign: 'center', backgroundColor: '#f5f5f5', p: 3, borderRadius: '8px' }}>
            <Container sx={{ backgroundColor: '#fff', py: 4, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <Typography variant="h4" gutterBottom align="center">
                    Agregar Horario
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
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="clinica-consultorio"
                                label="Clínica o consultorio"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="medico"
                                label="Médico"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="fecha"
                                label="Fecha"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="turno"
                                select
                                label="Turno"
                                value={turno}
                                onChange={handleTurnoChange}
                            >
                                <MenuItem value="Mañana">Mañana</MenuItem>
                                <MenuItem value="Tarde">Tarde</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="entrada"
                                label="Entrada"
                                type="time"
                                value={entrada}
                                onChange={handleEntradaChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="salida"
                                label="Salida"
                                type="time"
                                value={salida}
                                onChange={handleSalidaChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary">
                                Guardar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};



/* import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Grid, Container, Button, Typography } from '@mui/material';

export const AgregarHorario: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Agregar Horario
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                    '& .MuiButton-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="numero"
                            label="No."
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="clinica-consultorio"
                            label="Clínica o consultorio"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="medico"
                            label="Médico"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="fecha"
                            label="Fecha"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="turno"
                            label="Turno"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="manana"
                            label="Mañana"
                            type="time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="tarde"
                            label="Tarde"
                            type="time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="entrada"
                            label="Entrada"
                            type="time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="salida"
                            label="Salida"
                            type="time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};
 */