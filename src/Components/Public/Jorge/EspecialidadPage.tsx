import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Container, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Especialidad } from '../../../Types/Especialidad';
import { handleDeleteEspecialidad, handleGetEspecialidades, handleUpdateEspecialidad } from '../../../Handlers/EspecialidadHandler';


const EspecialidadPage: React.FC = () => {
    const navigate = useNavigate();
    const [especialidades, setEspecialidades] = React.useState<Especialidad[]>([]);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [selectedEspecialidad, setSelectedEspecialidad] = React.useState<Especialidad | null>(null);

    React.useEffect(() => {
        const fetchEspecialidades = async () => {
            try {
                const fetchedEspecialidades = await handleGetEspecialidades();
                setEspecialidades(fetchedEspecialidades);
            } catch (error) {
                console.error('Error al obtener las especialidades:', error);
            }
        };

        fetchEspecialidades();
    }, []);

    const handleEdit = (id: number) => {
        const especialidad = especialidades.find((especialidad) => especialidad.id === id);
        if (especialidad) {
            setSelectedEspecialidad(especialidad);
            setOpenEdit(true);
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
                    await handleDeleteEspecialidad(id.toString());
                    setEspecialidades(especialidades.filter((especialidad) => especialidad.id !== id));
                    Swal.fire('Eliminado!', 'La especialidad ha sido eliminada.', 'success');
                } catch (error) {
                    console.error('Error al eliminar la especialidad:', error);
                    Swal.fire('Error', 'Hubo un problema al eliminar la especialidad.', 'error');
                }
            }
        });
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
        setSelectedEspecialidad(null);
    };

    const handleSaveEdit = async () => {
        if (selectedEspecialidad) {
            try {
                await handleUpdateEspecialidad(selectedEspecialidad.id.toString(), selectedEspecialidad);
                setEspecialidades(especialidades.map((especialidad) => especialidad.id === selectedEspecialidad.id ? selectedEspecialidad : especialidad));
                setOpenEdit(false);
                setSelectedEspecialidad(null);
                Swal.fire('Guardado!', 'La especialidad ha sido editada exitosamente.', 'success');
            } catch (error) {
                console.error('Error al actualizar la especialidad:', error);
                Swal.fire('Error', 'Hubo un problema al guardar los cambios.', 'error');
            }
        }
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 0.2, minWidth: 90 },
        { field: 'nombre', headerName: 'Nombre', flex: 1, minWidth: 150 },
        { field: 'descripcion', headerName: 'Descripción', flex: 1, minWidth: 250 },
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
                    onClick={() => handleEdit(params.id as number)}
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
                    onClick={() => handleDelete(params.id as number)}
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
                        <Typography color="text.primary">Especialidades</Typography>
                    </Breadcrumbs>

                    <Typography variant="h4" component="h2" gutterBottom>
                        Lista de Especialidades
                    </Typography>

                    <Box sx={{ width: '100%', mt: 2 }}>
                        <DataGrid
                            rows={especialidades}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5, 10, 20]}
                            disableRowSelectionOnClick
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
                            onClick={() => navigate("/admin-createEspecialidad")}
                        >
                            + Añadir especialidad
                        </Button>
                    </Box>
                </Box>
            </Paper>

            <Dialog open={openEdit} onClose={handleCloseEdit}>
                <DialogTitle>Editar Especialidad</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Nombre"
                        type="text"
                        fullWidth
                        value={selectedEspecialidad?.nombre || ''}
                        onChange={(e) => setSelectedEspecialidad({ ...selectedEspecialidad, nombre: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Descripción"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        value={selectedEspecialidad?.descripcion || ''}
                        onChange={(e) => setSelectedEspecialidad({ ...selectedEspecialidad, descripcion: e.target.value })}
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

export default EspecialidadPage;
