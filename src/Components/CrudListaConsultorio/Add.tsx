import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    Switch,
    TextField,
    Typography,
    Breadcrumbs,
    Link,
    FormGroup,
    FormControlLabel,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

interface FormData {
    disponibilidad: boolean;
    status: boolean;
    consultorio: string;
}

const AgregarConsultorios: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        disponibilidad: false,
        status: false,
        consultorio: '',
    });

    const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSwitchChange = (name: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [name]: e.target.checked });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const errors: Partial<FormData> = {};
        if (!formData.consultorio) {
            errors.consultorio = 'El nombre del consultorio es requerido';
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log(formData); // Aquí puedes enviar los datos al backend
        }
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, mb: 2 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                        <HomeIcon sx={{ mr: 0.5 }} />
                        Inicio
                    </Link>
                    <Link color="inherit" component={RouterLink} to="/lista-de-consultorios">
                        Consultorios
                    </Link>
                    <Typography color="textPrimary">Agregar Consultorio</Typography>
                </Breadcrumbs>
            </Box>
            <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
                Agregar Consultorio
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <TextField
                                label="Nombre del Consultorio"
                                variant="outlined"
                                name="consultorio"
                                value={formData.consultorio}
                                onChange={handleChange}
                                fullWidth
                                error={!!formErrors.consultorio}
                                helperText={formErrors.consultorio}
                                required
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <FormControlLabel
                                control={<Switch checked={formData.disponibilidad} onChange={handleSwitchChange('disponibilidad')} />}
                                label="Disponibilidad"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <FormControlLabel
                                control={<Switch checked={formData.status} onChange={handleSwitchChange('status')} />}
                                label="Status"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#43A49B',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#51C5BA',
                                    },
                                }}
                                type="submit"
                            >
                                Guardar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AgregarConsultorios;
