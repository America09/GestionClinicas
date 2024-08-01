import * as React from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Breadcrumbs, Link, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { handleCreateAppointment } from '../../../Handlers/AppointmentHandler';
import { handleGetMedics } from '../../../Handlers/MedicHandler';
import { handleGetEspecialidades } from '../../../Handlers/EspecialidadHandler';
import { handleGetPatient } from '../../../Handlers/PatientHandler';
import { Medic } from '../../../Types/Medics';
import { Especialidad } from '../../../Types/Especialidad';
import { Patient } from '../../../Types/Patient';

const AgregarCitas: React.FC = () => {
    const navigate = useNavigate();
    const [reason, setReason] = React.useState<string>('');
    const [medicId, setMedicId] = React.useState<number>(0);
    const [patientId, setPatientId] = React.useState<number>(0);
    const [nombre, setNombre] = React.useState<string>('');
    const [apellido, setApellido] = React.useState<string>('');
    const [genero, setGenero] = React.useState<string>('');
    const [correo, setCorreo] = React.useState<string>('');
    const [numeroTelefono, setNumeroTelefono] = React.useState<string>('');
    const [estado, setEstado] = React.useState<string>('');
    const [codigoPostal, setCodigoPostal] = React.useState<string>('');
    const [specialtyId, setSpecialtyId] = React.useState<number>(0);
    const [fechaCita, setFechaCita] = React.useState<string>('');
    const [medics, setMedics] = React.useState<Medic[]>([]);
    const [especialidades, setEspecialidades] = React.useState<Especialidad[]>([]);
    const [patients, setPatients] = React.useState<Patient[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedMedics = await handleGetMedics();
                setMedics(fetchedMedics);
                const fetchedEspecialidades = await handleGetEspecialidades();
                setEspecialidades(fetchedEspecialidades);
                const fetchedPatients = await handleGetPatient();
                setPatients(fetchedPatients);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []);

    const handleSave = async () => {
        if (!reason || !medicId  || !specialtyId || !fechaCita) {
            Swal.fire('Error', 'Por favor, complete todos los campos obligatorios.', 'error');
            return;
        }

        try {
            await handleCreateAppointment({
                reason,
                medicId,
                nombre,
                apellido,
                genero,
                correo,
                numeroTelefono,
                estado,
                codigoPostal,
                specialtyId,
                fechaCita,
                id: 0,
                medicName: '',
                specialtyName: ''
            });
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
                        <Typography color="text.primary">Crear Citas</Typography>
                    </Breadcrumbs>

                    <Typography variant="h4" component="h2" gutterBottom>
                        Crear Cita
                    </Typography>

                    <Box component="form" sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Razón"
                                    type="text"
                                    fullWidth
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth margin="dense">
                                    <InputLabel>Médico</InputLabel>
                                    <Select
                                        value={medicId}
                                        onChange={(e) => setMedicId(Number(e.target.value))}
                                        label="Médico"
                                    >
                                        {medics.map((medic) => (
                                            <MenuItem key={medic.id} value={medic.id}>
                                                {medic.userName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            {/* <Grid item xs={12} sm={6}>
                                <FormControl fullWidth margin="dense">
                                    <InputLabel>Paciente</InputLabel>
                                    <Select
                                        value={patientId}
                                        onChange={(e) => setPatientId(Number(e.target.value))}
                                        label="Paciente"
                                    >
                                        {patients.map((patient) => (
                                            <MenuItem key={patient.userId} value={patient.userId}>
<<<<<<< Updated upstream
                                                {patient.phone}
=======
                                                {patient.}
>>>>>>> Stashed changes
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid> */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Nombre"
                                    type="text"
                                    fullWidth
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Apellido"
                                    type="text"
                                    fullWidth
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth margin="dense">
                                    <InputLabel>Género</InputLabel>
                                    <Select
                                        value={genero}
                                        onChange={(e) => setGenero(e.target.value)}
                                        label="Género"
                                    >
                                        <MenuItem value="Masculino">Masculino</MenuItem>
                                        <MenuItem value="Femenino">Femenino</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Correo"
                                    type="text"
                                    fullWidth
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Número de Teléfono"
                                    type="text"
                                    fullWidth
                                    value={numeroTelefono}
                                    onChange={(e) => setNumeroTelefono(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Estado"
                                    type="text"
                                    fullWidth
                                    value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Código Postal"
                                    type="text"
                                    fullWidth
                                    value={codigoPostal}
                                    onChange={(e) => setCodigoPostal(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth margin="dense">
                                    <InputLabel>Especialidad</InputLabel>
                                    <Select
                                        value={specialtyId}
                                        onChange={(e) => setSpecialtyId(Number(e.target.value))}
                                        label="Especialidad"
                                    >
                                        {especialidades.map((especialidad) => (
                                            <MenuItem key={especialidad.id} value={especialidad.id}>
                                                {especialidad.nombre}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="dense"
                                    label="Fecha de la Cita"
                                    type="datetime-local"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                    value={fechaCita}
                                    onChange={(e) => setFechaCita(e.target.value)}
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

export default AgregarCitas;
