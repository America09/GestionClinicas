import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Switch, FormControlLabel, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { handleDeleteConsultorio, handleGetConsultorios, handleUpdateConsultorio } from '../../../Handlers/ConsultorioHandler';
import { Consultorio } from '../../../Types/Consultorio';

const ConsultoriosPage: React.FC = () => {
    const navigate = useNavigate();
    const [consultorios, setConsultorios] = React.useState<Consultorio[]>([]);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [selectedConsultorio, setSelectedConsultorio] = React.useState<Consultorio | null>(null);

    React.useEffect(() => {
        const fetchConsultorios = async () => {
            try {
                const fetchedConsultorios = await handleGetConsultorios();
                setConsultorios(fetchedConsultorios);
            } catch (error) {
                console.error('Error al obtener los consultorios:', error);
            }
        };

        fetchConsultorios();
    }, []);

    const handleEdit = (id: number) => {
        const consultorio = consultorios.find((consultorio) => consultorio.id === id);
        if (consultorio) {
            setSelectedConsultorio(consultorio);
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
                    await handleDeleteConsultorio(id.toString());
                    setConsultorios(consultorios.filter((consultorio) => consultorio.id !== id));
                    Swal.fire('Eliminado!', 'El consultorio ha sido eliminado.', 'success');
                } catch (error) {
                    console.error('Error al eliminar el consultorio:', error);
                    Swal.fire('Error', 'Hubo un problema al eliminar el consultorio.', 'error');
                }
            }
        });
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
        setSelectedConsultorio(null);
    };

    const handleSaveEdit = async () => {
        if (selectedConsultorio) {
            try {
                await handleUpdateConsultorio(selectedConsultorio.id.toString(), selectedConsultorio);
                setConsultorios(consultorios.map((consultorio) => consultorio.id === selectedConsultorio.id ? selectedConsultorio : consultorio));
                setOpenEdit(false);
                setSelectedConsultorio(null);
                Swal.fire('Guardado!', 'El consultorio ha sido editado exitosamente.', 'success');
            } catch (error) {
                console.error('Error al actualizar el consultorio:', error);
                Swal.fire('Error', 'Hubo un problema al guardar los cambios.', 'error');
            }
        }
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 0.2, minWidth: 90 },
        { field: 'name', headerName: 'Nombre', flex: 1, minWidth: 150 },
        { field: 'status', headerName: 'Estado', flex: 1, minWidth: 150, renderCell: (params) => (params.value ? 'Activo' : 'Inactivo') },
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
                            <Typography color="textPrimary">Consultorios</Typography>
                        </Breadcrumbs>
                    </Box>

                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Lista de Consultorios
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <DataGrid
                            rows={consultorios}
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
                            onClick={() => navigate("/agregar-consultorios")}
                        >
                            + Añadir Consultorio
                        </Button>
                    </Box>
                </Box>
            </Paper>
            <Dialog open={openEdit} onClose={handleCloseEdit}>
                <DialogTitle>Editar Consultorio</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Nombre"
                        type="text"
                        fullWidth
                        value={selectedConsultorio?.name || ''}
                        onChange={(e) => setSelectedConsultorio({ ...selectedConsultorio, name: e.target.value })}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={selectedConsultorio?.status || false}
                                onChange={(e) => setSelectedConsultorio({ ...selectedConsultorio, status: e.target.checked })}
                                name="status"
                            />
                        }
                        label="Estado"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={selectedConsultorio?.availability || false}
                                onChange={(e) => setSelectedConsultorio({ ...selectedConsultorio, availability: e.target.checked })}
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

export default ConsultoriosPage;
