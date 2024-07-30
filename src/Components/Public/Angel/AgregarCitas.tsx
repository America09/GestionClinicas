import * as React from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Breadcrumbs, Link, FormControlLabel, Switch } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { handleCreateAppointment } from '../../../Handlers/appointmentHandlers';
import Swal from 'sweetalert2';

const AgregarCitas: React.FC = () => {
    const navigate = useNavigate();
    const [reason, setReason] = React.useState<string>('');
    const [medicId, setMedicId] = React.useState<number>(0);
    const [specialtyId, setSpecialtyId] = React.useState<number>(0);
    const [fechaCita, setFechaCita] = React.useState<string>(''); // Formato 'yyyy-MM-dd'
    const [hora, setHora] = React.useState<string>('');
    const [descripcion, setDescripcion] = React.useState<string>('');

    const handleSave = async () => {
        try {
            await handleCreateAppointment({ reason, medicId, specialtyId, fechaCita, hora, descripcion });
            Swal.fire('Guardado!', 'La cita ha sido creada exitosamente.', 'success');
            navigate('/admin-citas');
        } catch (error) {
            console.error('Error al crear la cita:', error);
            Swal.fire('Error', 'Hubo un problema al crear la cita.', 'error');
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
                        <Link underline="hover" color="inherit" href="/admin-citas">
                            Citas
                        </Link>
                        <Typography color="text.primary">Crear Cita</Typography>
                    </Breadcrumbs>

                    <Typography variant="h4" component="h2" gutterBottom>
                        Crear Cita
                    </Typography>

                    <Box component="form" sx={{ mt: 2 }}>
                        <TextField
                            margin="dense"
                            label="Razón"
                            type="text"
                            fullWidth
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        />
                        <TextField
                            margin="dense"
                            label="ID del Médico"
                            type="number"
                            fullWidth
                            value={medicId}
                            onChange={(e) => setMedicId(Number(e.target.value))}
                        />
                        <TextField
                            margin="dense"
                            label="ID de la Especialidad"
                            type="number"
                            fullWidth
                            value={specialtyId}
                            onChange={(e) => setSpecialtyId(Number(e.target.value))}
                        />
                        <TextField
                            margin="dense"
                            label="Fecha de la Cita"
                            type="date"
                            fullWidth
                            value={fechaCita}
                            onChange={(e) => setFechaCita(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            margin="dense"
                            label="Hora"
                            type="time"
                            fullWidth
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            margin="dense"
                            label="Descripción"
                            type="text"
                            fullWidth
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
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

export default AgregarCitas;
