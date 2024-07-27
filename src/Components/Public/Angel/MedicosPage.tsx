import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Paper, Switch, FormControlLabel, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { handleDeleteMedic, handleGetMedics, handleUpdateMedic, getUsers, getHorarios, getConsultorios } from '../../../Handlers/MedicHandler';
import { Medic } from '../../../Types/Medics';

const MedicsPage: React.FC = () => {
    const navigate = useNavigate();
    const [medics, setMedics] = React.useState<Medic[]>([]);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [selectedMedic, setSelectedMedic] = React.useState<Medic | null>(null);
    const [users, setUsers] = React.useState<{ id: number; name: string }[]>([]);
    const [horarios, setHorarios] = React.useState<{ id: number; name: string }[]>([]);
    const [consultorios, setConsultorios] = React.useState<{ id: number; name: string }[]>([]);

    React.useEffect(() => {
        const fetchMedics = async () => {
            try {
                const fetchedMedics = await handleGetMedics();
                setMedics(fetchedMedics);
            } catch (error) {
                console.error('Error al obtener los médicos:', error);
            }
        };

        const fetchData = async () => {
            const usersData = await getUsers();
            const horariosData = await getHorarios();
            const consultoriosData = await getConsultorios();
            setUsers(usersData);
            setHorarios(horariosData);
            setConsultorios(consultoriosData);
        };

        fetchMedics();
        fetchData();
    }, []);

    const handleEdit = (id: number) => {
        const medic = medics.find((medic) => medic.id === id);
        if (medic) {
            setSelectedMedic(medic);
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
            confirmButtonText: 'Sí, eliminarlo'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await handleDeleteMedic(id.toString());
                    setMedics(medics.filter((medic) => medic.id !== id));
                    Swal.fire('Eliminado!', 'El médico ha sido eliminado.', 'success');
                } catch (error) {
                    console.error('Error al eliminar el médico:', error);
                    Swal.fire('Error', 'Hubo un problema al eliminar el médico.', 'error');
                }
            }
        });
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
        setSelectedMedic(null);
    };

    const handleSaveEdit = async () => {
        if (selectedMedic) {
            try {
                await handleUpdateMedic(selectedMedic.id.toString(), selectedMedic);
                setMedics(medics.map((medic) => medic.id === selectedMedic.id ? selectedMedic : medic));
                setOpenEdit(false);
                setSelectedMedic(null);
                Swal.fire('Guardado!', 'El médico ha sido editado exitosamente.', 'success');
            } catch (error) {
                console.error('Error al actualizar el médico:', error);
                Swal.fire('Error', 'Hubo un problema al guardar los cambios.', 'error');
            }
        }
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 0.2, minWidth: 90 },
        { field: 'userId', headerName: 'Medico', flex: 1, minWidth: 90, renderCell: (params) => (params.row.userName) },
        { field: 'consultorioId', headerName: 'Consultorio', flex: 1, minWidth: 110, renderCell: (params) => (params.row.consultorioName) },
        { field: 'horarioId', headerName: 'Horario', flex: 1, minWidth: 130, renderCell: (params) => (params.row.horarioName) },
        { field: 'availability', headerName: 'Disponibilidad', flex: 1, minWidth: 110, renderCell: (params) => (params.value ? 'Disponible' : 'No Disponible') },
        { field: 'professionalId', headerName: 'ID Profesional', flex: 1, minWidth: 110 },
        { field: 'school', headerName: 'Escuela', flex: 1, minWidth: 90 },
        { field: 'yearExperience', headerName: 'Años Exp.', flex: 1, minWidth: 90 },
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
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" component={RouterLink} to="/dashboard" sx={{ display: 'flex', alignItems: 'center' }}>
                                <HomeIcon sx={{ mr: 0.5 }} />
                                Inicio
                            </Link>
                            <Typography color="textPrimary">Médicos</Typography>
                        </Breadcrumbs>
                    </Box>

                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Lista de Médicos
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <DataGrid
                            rows={medics}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            disableRowSelectionOnClick
                            autoHeight
                        />
                    </Box>

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
                            onClick={() => navigate("/agregar-medicos")}
                        >
                            + Añadir Médico
                        </Button>
                    </Box>
                </Box>
            </Paper>

            <Dialog open={openEdit} onClose={handleCloseEdit}>
                <DialogTitle>Editar Médico</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="ID Profesional"
                        type="text"
                        fullWidth
                        value={selectedMedic?.professionalId || ''}
                        onChange={(e) => setSelectedMedic({ ...selectedMedic, professionalId: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Escuela"
                        type="text"
                        fullWidth
                        value={selectedMedic?.school || ''}
                        onChange={(e) => setSelectedMedic({ ...selectedMedic, school: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Años de Experiencia"
                        type="number"
                        fullWidth
                        value={selectedMedic?.yearExperience || ''}
                        onChange={(e) => setSelectedMedic({ ...selectedMedic, yearExperience: Number(e.target.value) })}
                    />
                    <FormControl fullWidth margin="dense">
                        <InputLabel id="user-label">Usuario</InputLabel>
                        <Select
                            labelId="user-label"
                            value={selectedMedic?.userId || ''}
                            onChange={(e) => setSelectedMedic({ ...selectedMedic, userId: Number(e.target.value) })}
                            label="Usuario"
                        >
                            {users.map((user) => (
                                <MenuItem key={user.id} value={user.id}>
                                    {user.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="dense">
                        <InputLabel id="horario-label">Horario</InputLabel>
                        <Select
                            labelId="horario-label"
                            value={selectedMedic?.horarioId || ''}
                            onChange={(e) => setSelectedMedic({ ...selectedMedic, horarioId: Number(e.target.value) })}
                            label="Horario"
                        >
                            {horarios.map((horario) => (
                                <MenuItem key={horario.id} value={horario.id}>
                                    {horario.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="dense">
                        <InputLabel id="consultorio-label">Consultorio</InputLabel>
                        <Select
                            labelId="consultorio-label"
                            value={selectedMedic?.consultorioId || ''}
                            onChange={(e) => setSelectedMedic({ ...selectedMedic, consultorioId: Number(e.target.value) })}
                            label="Consultorio"
                        >
                            {consultorios.map((consultorio) => (
                                <MenuItem key={consultorio.id} value={consultorio.id}>
                                    {consultorio.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={selectedMedic?.availability || false}
                                onChange={(e) => setSelectedMedic({ ...selectedMedic, availability: e.target.checked })}
                                name="availability"
                            />
                        }
                        label="Disponibilidad"
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

export default MedicsPage;
