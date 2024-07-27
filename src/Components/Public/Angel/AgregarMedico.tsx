import * as React from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Breadcrumbs, Link, FormControlLabel, Switch, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { handleCreateMedic } from '../../../Handlers/MedicHandler';
import Swal from 'sweetalert2';

const AgregarMedico: React.FC = () => {
    const navigate = useNavigate();
    const [professionalId, setProfessionalId] = React.useState<string>('');
    const [school, setSchool] = React.useState<string>('');
    const [yearExperience, setYearExperience] = React.useState<number>(0);
    const [dateGraduate, setDateGraduate] = React.useState<string>('');
    const [availability, setAvailability] = React.useState<boolean>(true);
    const [userId, setUserId] = React.useState<number>(0);
    const [horarioId, setHorarioId] = React.useState<number>(0);
    const [consultorioId, setConsultorioId] = React.useState<number>(0);

    const handleSave = async () => {
        try {
            if (!professionalId || !school || !yearExperience || !dateGraduate || !userId || !horarioId || !consultorioId) {
                Swal.fire('Error', 'Por favor, completa todos los campos requeridos.', 'error');
                return;
            }

            const [year, month, day] = dateGraduate.split('-').map(Number);

            await handleCreateMedic({
                professionalId,
                school,
                yearExperience,
                year,
                month,
                day,
                availability,
                userId,
                horarioId,
                consultorioId
            });
            Swal.fire('Guardado!', 'El médico ha sido creado exitosamente.', 'success');
            navigate('/admin-medicos');
        } catch (error) {
            console.error('Error al crear el médico:', error);
            Swal.fire('Error', 'Hubo un problema al crear el médico.', 'error');
        }
    };

    return (
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '-4rem' }}>
            <Paper sx={{ padding: 4, textAlign: 'center', width: '100%', boxShadow: 3, borderRadius: 2 }}>
                <Box sx={{ width: '100%' }}>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ justifyContent: 'flex-start', display: 'flex', mb: 2 }}>
                        <Link underline="hover" color="inherit" href="/dashboard">
                            Inicio
                        </Link>
                        <Link underline="hover" color="inherit" href="/admin-medicos">
                            Médicos
                        </Link>
                        <Typography color="text.primary">Crear Médico</Typography>
                    </Breadcrumbs>

                    <Typography variant="h4" component="h2" gutterBottom>
                        Crear Médico
                    </Typography>

                    <Box component="form" sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="ID Profesional"
                                    type="text"
                                    fullWidth
                                    value={professionalId}
                                    onChange={(e) => setProfessionalId(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Escuela"
                                    type="text"
                                    fullWidth
                                    value={school}
                                    onChange={(e) => setSchool(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Años de Experiencia"
                                    type="number"
                                    fullWidth
                                    value={yearExperience}
                                    onChange={(e) => setYearExperience(Number(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Fecha de Graduación"
                                    type="date"
                                    fullWidth
                                    value={dateGraduate}
                                    onChange={(e) => setDateGraduate(e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Medico"
                                    type="number"
                                    fullWidth
                                    value={userId}
                                    onChange={(e) => setUserId(Number(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Horario"
                                    type="number"
                                    fullWidth
                                    value={horarioId}
                                    onChange={(e) => setHorarioId(Number(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Consultorio"
                                    type="number"
                                    fullWidth
                                    value={consultorioId}
                                    onChange={(e) => setConsultorioId(Number(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
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
                            </Grid>
                        </Grid>

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

export default AgregarMedico;
