import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellItem, GridRenderCellParams } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Horario } from '../../../Types/Horario';
import { handleDeleteHorario, handleGetHorarios, handleUpdateHorario } from '../../../Handlers/HorarioHandler';

const HorariosPage: React.FC = () => {
    const navigate = useNavigate();
    const [horarios, setHorarios] = React.useState<Horario[]>([]);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [selectedHorario, setSelectedHorario] = React.useState<Horario | null>(null);

    React.useEffect(() => {
        const fetchHorarios = async () => {
            try {
                const fetchedHorarios = await handleGetHorarios();
                setHorarios(fetchedHorarios);
            } catch (error) {
                console.error('Error al obtener los horarios:', error);
            }
        };

        fetchHorarios();
    }, []);

    const handleEdit = (id: number) => {
        const horario = horarios.find((horario) => horario.id === id);
        if (horario) {
            setSelectedHorario(horario);
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
                    await handleDeleteHorario(id);
                    setHorarios(horarios.filter((horario) => horario.id !== id));
                    Swal.fire('Eliminado!', 'El horario ha sido eliminado.', 'success');
                } catch (error) {
                    console.error('Error al eliminar el horario:', error);
                    Swal.fire('Error', 'Hubo un problema al eliminar el horario.', 'error');
                }
            }
        });
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
        setSelectedHorario(null);
    };

    const handleSaveEdit = async () => {
        if (selectedHorario) {
            try {
                await handleUpdateHorario(selectedHorario.id, selectedHorario);
                setHorarios(horarios.map((horario) => horario.id === selectedHorario.id ? selectedHorario : horario));
                setOpenEdit(false);
                setSelectedHorario(null);
                Swal.fire('Guardado!', 'El horario ha sido editado exitosamente.', 'success');
            } catch (error) {
                console.error('Error al actualizar el horario:', error);
                Swal.fire('Error', 'Hubo un problema al guardar los cambios.', 'error');
            }
        }
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'Fecha', headerName: 'Fecha', width: 130, editable: true },
        { field: 'Turno', headerName: 'Turno', width: 90, editable: true },
        { field: 'Entrada', headerName: 'Entrada', width: 90, editable: true },
        { field: 'Salida', headerName: 'Salida', width: 90, editable: true },
        {
            field: 'Editar',
            headerName: 'Editar',
            width: 100,
            sortable: false,
            renderCell: (params: GridRenderCellParams) => (
                <GridActionsCellItem
                    icon={<EditIcon />}
                    label="Edit"
                    onClick={() => handleEdit(Number(params.id))}
                />
            ),
        },
        {
            field: 'Eliminar',
            headerName: 'Eliminar',
            width: 100,
            sortable: false,
            renderCell: (params: GridRenderCellParams) => (
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={() => handleDelete(Number(params.id))}
                />
            ),
        },
    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <Paper
                sx={{
                    padding: 3,
                    maxWidth: 800,
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
                            <Typography color="textPrimary">Horarios</Typography>
                        </Breadcrumbs>
                    </Box>

                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Lista de Horarios
                        </Typography>
                    </Box>

                    <Box sx={{ width: '100%', mt: 2 }}>
                        <DataGrid
                            rows={horarios}
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
                            onClick={() => navigate("/agregar-horarios")}
                        >
                            + Añadir Horarios
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default HorariosPage;
