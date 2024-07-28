import * as React from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Breadcrumbs, Link, FormControlLabel, Switch, MenuItem, Select, InputLabel, FormControl, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { handleCreateMedic } from '../../../Handlers/MedicHandler';
import Swal from 'sweetalert2';
import { Consultorio } from '../../../Types/Consultorio'; 
import { getConsultorios } from '../../../Handlers/ConsultorioHandler'; // Asegúrate de importar esta función correctamente

const AgregarMedico: React.FC = () => {
    const navigate = useNavigate();
    const [professionalId, setProfessionalId] = React.useState<string>('');
    const [school, setSchool] = React.useState<string>('');
    const [yearExperience, setYearExperience] = React.useState<number>(0);
    const [dateGraduate, setDateGraduate] = React.useState<string>('');
    const [availability, setAvailability] = React.useState<boolean>(true);
    const [userId, setUserId] = React.useState<number>(0);
    const [consultorioId, setConsultorioId] = React.useState<number | string>('');
    const [consultorios, setConsultorios] = React.useState<Consultorio[]>([]);

    React.useEffect(() => {
        const fetchConsultorios = async () => {
            try {
                const fetchedConsultorios = await getConsultorios();
                setConsultorios(fetchedConsultorios);
            } catch (error) {
                console.error('Error al obtener los consultorios:', error);
            }
        };

        fetchConsultorios();
    }, []);

    const handleSave = async () => {
        try {
            await handleCreateMedic({
                professionalId,
                school,
                yearExperience,
                dateGraduate,
                availability,
                userId,
                consultorioId: parseInt(consultorioId.toString()), // Convertir consultorioId a número antes de enviarlo
            });
            Swal.fire('Guardado!', 'El médico ha sido creado exitosamente.', 'success');
            navigate('/admin-medicos');
        } catch (error) {
            console.error('Error al crear el médico:', error);
            Swal.fire('Error', 'Hubo un problema al crear el médico.', 'error');
        }
    };

    return (
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper sx={{ padding: 4, textAlign: 'center', width: '100%', boxShadow: 3, borderRadius: 2 }}>
                <Box sx={{ width: '100%' }}>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ justifyContent: 'flex-start', display: 'flex', mb: 2 }}>
                        <Link underline="hover" color="inherit" href="/">
                            Home
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
                                    onChange={(e) => setYearExperience(parseInt(e.target.value))}
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
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="ID de Usuario"
                                    type="number"
                                    fullWidth
                                    value={userId}
                                    onChange={(e) => setUserId(parseInt(e.target.value))}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth margin="dense">
                                    <InputLabel>Consultorio</InputLabel>
                                    <Select
                                        value={consultorioId}
                                        onChange={(e) => setConsultorioId(e.target.value)}
                                        label="Consultorio"
                                    >
                                        {consultorios.map((consultorio) => (
                                            <MenuItem key={consultorio.id} value={consultorio.id}>
                                                {consultorio.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
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
