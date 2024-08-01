import React, { useState } from 'react';
import { TextField, Button, Box, Typography, FormControl, Grid, Breadcrumbs, Link, Container, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CreateHorarioDto } from '../../../Types/Horario';
import { handleCreateHorario } from '../../../Handlers/HorarioHandler';

const CreateHorario: React.FC = () => {
    const [formData, setFormData] = useState<CreateHorarioDto>({
        name: '',
        fecha: '',
        turno: '',
        entrada: '',
        salida: ''
    });

    const [formErrors, setFormErrors] = useState<Partial<CreateHorarioDto>>({});
    const navigate = useNavigate(); // Hook para la redirección

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const errors: Partial<CreateHorarioDto> = {};
        if (!formData.name) errors.name = 'El nombre es requerido';
        if (!formData.fecha) errors.fecha = 'La fecha es requerida';
        if (!formData.turno) errors.turno = 'El turno es requerido';
        if (!formData.entrada) errors.entrada = 'La entrada es requerida';
        if (!formData.salida) errors.salida = 'La salida es requerida';

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const payload: CreateHorarioDto = {
                    name: formData.name,
                    fecha: formData.fecha,
                    turno: formData.turno,
                    entrada: formData.entrada + ':00',
                    salida: formData.salida + ':00'
                };
                await handleCreateHorario(payload);
                Swal.fire({
                    title: 'Guardado exitosamente',
                    text: 'El horario ha sido guardado correctamente.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    navigate('/admin-horarios'); // Redirección a la lista de horarios
                });
            } catch (error: any) {
                Swal.fire({
                    title: 'Error',
                    text: `Hubo un problema al guardar el horario. ${error.response?.data?.message || error.message}`,
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
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', py: 4 }}>
            <Paper sx={{ padding: 4, width: '100%', maxWidth: '800px', boxShadow: 3, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 3 }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                            <HomeIcon sx={{ mr: 0.5 }} />
                            Inicio
                        </Link>
                        <Link color="inherit" component={RouterLink} to="/admin-horarios">Horarios</Link>
                        <Typography color="textPrimary">Añadir Horario</Typography>
                    </Breadcrumbs>
                </Box>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography variant="h5" component="h2" gutterBottom>Añadir Horario</Typography>
                </Box>
                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth error={!!formErrors.name}>
                                <TextField
                                    label="Nombre"
                                    variant="outlined"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    fullWidth
                                    error={!!formErrors.name}
                                    helperText={formErrors.name}
                                    required
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Fecha"
                                    variant="outlined"
                                    name="fecha"
                                    value={formData.fecha}
                                    onChange={handleChange}
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                    error={!!formErrors.fecha}
                                    helperText={formErrors.fecha}
                                    required
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth error={!!formErrors.turno}>
                                <TextField
                                    label="Turno"
                                    variant="outlined"
                                    name="turno"
                                    value={formData.turno}
                                    onChange={handleChange}
                                    fullWidth
                                    error={!!formErrors.turno}
                                    helperText={formErrors.turno}
                                    required
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Entrada"
                                    variant="outlined"
                                    name="entrada"
                                    value={formData.entrada}
                                    onChange={handleChange}
                                    type="time"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                    error={!!formErrors.entrada}
                                    helperText={formErrors.entrada}
                                    required
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Salida"
                                    variant="outlined"
                                    name="salida"
                                    value={formData.salida}
                                    onChange={handleChange}
                                    type="time"
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                    error={!!formErrors.salida}
                                    helperText={formErrors.salida}
                                    required
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: '#43A49B', color: 'white', '&:hover': { backgroundColor: '#51C5BA' }}}
                                    type="submit"
                                >
                                    Agregar
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default CreateHorario;
