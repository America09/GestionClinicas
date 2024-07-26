import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Container, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Paper, Switch, FormControlLabel } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { handleDeleteMedic, handleGetMedics, handleUpdateMedic } from '../../../Handlers/MedicHandler';
import { Medic } from '../../../Types/Medic';

const MedicsPage: React.FC = () => {
    console.log('MedicsPage component is being rendered');

    const navigate = useNavigate();
    const [medics, setMedics] = React.useState<Medic[]>([]);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [selectedMedic, setSelectedMedic] = React.useState<Medic | null>(null);

    React.useEffect(() => {
        const fetchMedics = async () => {
            try {
                const fetchedMedics = await handleGetMedics();
                console.log(fetchedMedics);
                setMedics(fetchedMedics);
            } catch (error) {
                console.error('Error al obtener los medics:', error);
            }
        };

        fetchMedics();
    }, []);

    const handleEdit = (id: number) => {
        const medic = medics.find((medic) => medic.id === id);
        if (medic) {
            setSelectedMedic(medic);
            setOpenEdit(true);
            console.log(medic);
        }
    };

    const handleDelete = (id: number) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await handleDeleteMedic(id.toString());
                    setMedics(medics.filter((medic) => medic.id !== id));
                    Swal.fire('Eliminado!', 'El medico ha sido eliminado.', 'success');
                } catch (error) {
                    console.error('Error al eliminar el medico:', error);
                    Swal.fire('Error', 'Hubo un problema al eliminar el medico.', 'error');
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
                Swal.fire('Guardado!', 'El medico ha sido editado exitosamente.', 'success');
            } catch (error) {
                console.error('Error al actualizar el medico:', error);
                Swal.fire('Error', 'Hubo un problema al guardar los cambios.', 'error');
            }
        }
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 0.2, minWidth: 90 },
        { field: 'school', headerName: 'Escuela', flex: 1, minWidth: 150 },
        { field: 'yearExperience', headerName: 'Años de Experiencia', flex: 1, minWidth: 150 },
        { field: 'dateGraduate', headerName: 'Fecha de Graduación', flex: 1, minWidth: 150 },
        { field: 'availability', headerName: 'Disponibilidad', flex: 1, minWidth: 150, renderCell: (params) => (params.value ? 'Disponible' : 'No Disponible') },
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
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper
                sx={{
                    padding: 4,
                    textAlign: 'center',
                    width: '100%',
                    boxShadow: 3,
                    borderRadius: 2,
                }}
            >
                <Box sx={{ width: '100%' }}>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ justifyContent: 'flex-start', display: 'flex', mb: 2 }}>
                        <Link underline="hover" color="inherit" href="/">
                            Home
                        </Link>
                        <Typography color="text.primary">Medics</Typography>
                    </Breadcrumbs>

                    <Typography variant="h4" component="h2" gutterBottom>
                        Lista de Medicos
                    </Typography>

                    <Box sx={{ width: '100%', mt: 2 }}>
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
                            pageSizeOptions={[5, 10, 20]}
                            disableSelectionOnClick
                            autoHeight
                            sx={{
                                '& .MuiDataGrid-root': {
                                    overflowX: 'auto',
                                },
                            }}
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
                            Añadir Medico
                        </Button>
                    </Box>
                </Box>
            </Paper>

            {/* Modal para editar medic */}
            <Dialog open={openEdit} onClose={handleCloseEdit}>
                <DialogTitle>Editar Medico</DialogTitle>
                <DialogContent>
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
                        onChange={(e) => setSelectedMedic({ ...selectedMedic, yearExperience: parseInt(e.target.value) })}
                    />
                    <TextField
                        margin="dense"
                        label="Fechaa de Graduación"
                        type="date"
                        fullWidth
                        value={selectedMedic?.dateGraduate || ''}
                        onChange={(e) => setSelectedMedic({ ...selectedMedic, dateGraduate: e.target.value })}
                    />
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
        </Container>
    );
};

export default MedicsPage;
