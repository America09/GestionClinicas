import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    Switch,
    TextField,
    Typography,
    Breadcrumbs,
    Link,
    FormControlLabel,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Swal from 'sweetalert2';

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const errors: Partial<FormData> = {};
        if (!formData.consultorio) {
            errors.consultorio = 'El nombre del consultorio es requerido';
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Simulamos una llamada a una API
            try {
                // Aquí puedes hacer la llamada a la API para guardar los datos
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulación de retraso

                Swal.fire({
                    title: 'Guardado exitosamente',
                    text: 'El consultorio ha sido guardado correctamente.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al guardar el consultorio. Inténtalo de nuevo.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos requeridos.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 5, mb: 4, px: 0 }}>
                <Box sx={{ display: 'flex', ml: -14 }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                            <HomeIcon sx={{ mr: 0.5 }} />
                            Inicio
                        </Link>
                        <Link color="inherit" component={RouterLink} to="/admin-consultorios">
                            Consultorios
                        </Link>
                        <Typography color="textPrimary">Agregar Consultorio</Typography>
                    </Breadcrumbs>
                </Box>
            </Box>
            <Box sx={{ textAlign: 'left', ml: 6 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Agregar Consultorio
                </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, display: 'flex', justifyContent: 'flex-start', ml: -15 }}>
                <Grid container spacing={2} sx={{ maxWidth: '600px' }}>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <FormControlLabel
                                control={<Switch checked={formData.disponibilidad} onChange={handleSwitchChange('disponibilidad')} />}
                                label="Disponibilidad"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <FormControlLabel
                                control={<Switch checked={formData.status} onChange={handleSwitchChange('status')} />}
                                label="Status"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
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
                                Agregar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AgregarConsultorios;
