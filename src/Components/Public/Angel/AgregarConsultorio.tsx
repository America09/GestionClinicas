import * as React from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Breadcrumbs, Link, FormControlLabel, Switch } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { handleCreateConsultorio } from '../../../Handlers/ConsultorioHandler';
import Swal from 'sweetalert2';

const AgregarConsultorio: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = React.useState<string>('');
    const [status, setStatus] = React.useState<boolean>(true);
    const [availability, setAvailability] = React.useState<boolean>(true);

    const handleSave = async () => {
        try {
            await handleCreateConsultorio({ name, status, availability });
            Swal.fire('Guardado!', 'El consultorio ha sido creado exitosamente.', 'success');
            navigate('/admin-consultorios');
        } catch (error) {
            console.error('Error al crear el consultorio:', error);
            Swal.fire('Error', 'Hubo un problema al crear el consultorio.', 'error');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', paddingTop: '5vh' }}>
            <Paper sx={{ padding: 4, textAlign: 'center', width: '100%', boxShadow: 3, borderRadius: 2 }}>
                <Box sx={{ width: '100%' }}>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ justifyContent: 'flex-start', display: 'flex', mb: 2 }}>
                        <Link underline="hover" color="inherit" href="/dashboard">
                            Inicio
                        </Link>
                        <Link underline="hover" color="inherit" href="/admin-consultorios">
                            Consultorios
                        </Link>
                        <Typography color="text.primary">Crear Consultorio</Typography>
                    </Breadcrumbs>

                    <Typography variant="h4" component="h2" gutterBottom>
                        Crear Consultorio
                    </Typography>

                    <Box component="form" sx={{ mt: 2 }}>
                        <TextField
                            margin="dense"
                            label="Consultorio"
                            type="text"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={status}
                                    onChange={(e) => setStatus(e.target.checked)}
                                    name="status"
                                />
                            }
                            label="Estado"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={availability}
                                    onChange={(e) => setAvailability(e.target.checked)}
                                    name="availability"
                                />
                            }
                            label="Disponibilidad"
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#43A49B',
                                    color: 'white',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        bgcolor: '#51C5BA',
                                    },
                                }}
                                onClick={handleSave}
                            >
                                Guardar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default AgregarConsultorio;
