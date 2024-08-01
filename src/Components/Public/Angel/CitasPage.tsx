import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { handleDeleteAppointment, handleGetAppointments, handleUpdateAppointment } from '../../../Handlers/AppointmentHandler';
import { Appointment } from '../../../Types/Appointment';

const CitasPage: React.FC = () => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = React.useState<Appointment[]>([]);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [selectedAppointment, setSelectedAppointment] = React.useState<Appointment | null>(null);

    React.useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const fetchedAppointments = await handleGetAppointments();
                setAppointments(fetchedAppointments);
            } catch (error) {
                console.error('Error al obtener las citas:', error);
            }
        };

        fetchAppointments();
    }, []);

    const handleEdit = (id: number) => {
        const appointment = appointments.find((appointment) => appointment.id === id);
        if (appointment) {
            setSelectedAppointment(appointment);
            setOpenEdit(true);
        }
    };

    const handleDelete = (id: number) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#43A49B',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo',
            customClass: {
                confirmButton: 'confirm-button'
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await handleDeleteAppointment(id.toString());
                    setAppointments(appointments.filter((appointment) => appointment.id !== id));
                    Swal.fire('Eliminado!', 'La cita ha sido eliminada.', 'success');
                } catch (error) {
                    console.error('Error al eliminar la cita:', error);
                    Swal.fire('Error', 'Hubo un problema al eliminar la cita.', 'error');
                }
            }
        });
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
        setSelectedAppointment(null);
    };

    const handleSaveEdit = async () => {
        if (selectedAppointment) {
            try {
                await handleUpdateAppointment(selectedAppointment.id.toString(), selectedAppointment);
                setAppointments(appointments.map((appointment) => appointment.id === selectedAppointment.id ? selectedAppointment : appointment));
                setOpenEdit(false);
                setSelectedAppointment(null);
                Swal.fire('Guardado!', 'La cita ha sido editada exitosamente.', 'success');
            } catch (error) {
                console.error('Error al actualizar la cita:', error);
                Swal.fire('Error', 'Hubo un problema al guardar los cambios.', 'error');
            }
        }
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 0.2, minWidth: 90 },
        { field: 'reason', headerName: 'Razón', flex: 1, minWidth: 150 },
        { field: 'medicName', headerName: 'Médico', flex: 1, minWidth: 150 },
        { field: 'patientName', headerName: 'Paciente', flex: 1, minWidth: 150 },
        { field: 'nombre', headerName: 'Nombre', flex: 1, minWidth: 150 },
        { field: 'apellido', headerName: 'Apellido', flex: 1, minWidth: 150 },
        { field: 'genero', headerName: 'Género', flex: 1, minWidth: 150 },
        { field: 'correo', headerName: 'Correo', flex: 1, minWidth: 150 },
        { field: 'numeroTelefono', headerName: 'Número de Teléfono', flex: 1, minWidth: 150 },
        { field: 'estado', headerName: 'Estado', flex: 1, minWidth: 150 },
        { field: 'codigoPostal', headerName: 'Código Postal', flex: 1, minWidth: 150 },
        { field: 'specialtyName', headerName: 'Especialidad', flex: 1, minWidth: 150 },
        { field: 'fechaCita', headerName: 'Fecha de la Cita', flex: 1, minWidth: 150, renderCell: (params) => new Date(params.value).toLocaleDateString() },
        {
            field: 'editar',
            headerName: 'Editar',
            flex: 0.5,
            minWidth: 100,
            sortable: false,
            renderCell: (params) => (
                <GridActionsCellItem
                    icon={<EditIcon />}
                    label="Edit"
                    onClick={() => handleEdit(params.id)}
                />
            ),
        },
        {
            field: 'eliminar',
            headerName: 'Eliminar',
            flex: 0.5,
            minWidth: 100,
            sortable: false,
            renderCell: (params) => (
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={() => handleDelete(params.id)}
                />
            ),
        },
    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Paper
                sx={{
                    padding: 3,
                    maxWidth: 850,
                    width: '100%',
                    boxShadow: 3,
                    borderRadius: 2,
                    margin: '0 auto',
                }}
            >
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" component={RouterLink} to="/dashboard" sx={{ display: 'flex', alignItems: 'center' }}>
                                <HomeIcon sx={{ mr: 0.5 }} />
                                Inicio
                            </Link>
                            <Typography color="textPrimary">Citas</Typography>
                        </Breadcrumbs>
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
                            onClick={() => navigate("/agregar-citas")}
                        >
                            Añadir Cita
                        </Button>
                    </Box>

                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Lista de Citas
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <DataGrid
                            rows={appointments}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            disableSelectionOnClick
                            autoHeight
                        />
                    </Box>
                </Box>
            </Paper>

            <Dialog open={openEdit} onClose={handleCloseEdit}>
                <DialogTitle>Editar Cita</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Razón"
                        type="text"
                        fullWidth
                        value={selectedAppointment?.reason || ''}
                        onChange={(e) => setSelectedAppointment({ ...selectedAppointment, reason: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Nombre"
                        type="text"
                        fullWidth
                        value={selectedAppointment?.nombre || ''}
                        onChange={(e) => setSelectedAppointment({ ...selectedAppointment, nombre: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Apellido"
                        type="text"
                        fullWidth
                        value={selectedAppointment?.apellido || ''}
                        onChange={(e) => setSelectedAppointment({ ...selectedAppointment, apellido: e.target.value })}
                    />
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Género</InputLabel>
                        <Select
                            value={selectedAppointment?.genero || ''}
                            onChange={(e) => setSelectedAppointment({ ...selectedAppointment, genero: e.target.value as string })}
                            label="Género"
                        >
                            <MenuItem value="Masculino">Masculino</MenuItem>
                            <MenuItem value="Femenino">Femenino</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="dense"
                        label="Correo"
                        type="text"
                        fullWidth
                        value={selectedAppointment?.correo || ''}
                        onChange={(e) => setSelectedAppointment({ ...selectedAppointment, correo: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Número de Teléfono"
                        type="text"
                        fullWidth
                        value={selectedAppointment?.numeroTelefono || ''}
                        onChange={(e) => setSelectedAppointment({ ...selectedAppointment, numeroTelefono: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Estado"
                        type="text"
                        fullWidth
                        value={selectedAppointment?.estado || ''}
                        onChange={(e) => setSelectedAppointment({ ...selectedAppointment, estado: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Código Postal"
                        type="text"
                        fullWidth
                        value={selectedAppointment?.codigoPostal || ''}
                        onChange={(e) => setSelectedAppointment({ ...selectedAppointment, codigoPostal: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit}>Cancelar</Button>
                    <Button onClick={handleSaveEdit} variant="contained">Guardar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CitasPage;
