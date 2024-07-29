import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Container, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Select, FormControl, InputLabel, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Horario, UpdateHorarioDto } from '../../../Types/Horario';
import { handleDeleteHorario, handleGetHorarios, handleUpdateHorario } from '../../../Handlers/HorarioHandler';

const HorariosPage: React.FC = () => {
    const navigate = useNavigate();
    const [horarios, setHorarios] = useState<Horario[]>([]);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedHorario, setSelectedHorario] = useState<Horario | null>(null);

    useEffect(() => {
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
            confirmButtonColor: '#43A49B',
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
                const updatedHorario: UpdateHorarioDto = {
                    name: selectedHorario.name,
                    fecha: selectedHorario.fecha,
                    turno: selectedHorario.turno,
                    entrada: selectedHorario.entrada + ':00',
                    salida: selectedHorario.salida + ':00'
                };

                await handleUpdateHorario(selectedHorario.id!, updatedHorario);
            setHorarios(horarios.map((horario) =>
                horario.id === selectedHorario.id ? { ...horario, ...updatedHorario } : horario
            ));
            setOpenEdit(false);
            setSelectedHorario(null);
            Swal.fire('Guardado!', 'El horario ha sido editado exitosamente.', 'success');
            } catch (error) {
                console.error(`Error al actualizar el horario:`, error);
                Swal.fire('Error', 'Hubo un problema al guardar los cambios.', 'error');
            }
        }
    };

    const handleInputChange = (field: keyof Horario, value: string) => {
        setSelectedHorario((prevSelectedHorario) => {
            if (!prevSelectedHorario) return prevSelectedHorario;
            return { ...prevSelectedHorario, [field]: value };
        });
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 0.2, minWidth: 90 },
        { field: 'name', headerName: 'Nombre', flex: 1, minWidth: 150 },
        { field: 'fecha', headerName: 'Fecha', flex: 1, minWidth: 150 },
        { field: 'turno', headerName: 'Turno', flex: 1, minWidth: 150 },
        { field: 'entrada', headerName: 'Entrada', flex: 1, minWidth: 150 },
        { field: 'salida', headerName: 'Salida', flex: 1, minWidth: 150 },
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
            <Paper sx={{ padding: 4, textAlign: 'center', width: '100%', boxShadow: 3, borderRadius: 2 }}>
                <Box sx={{ width: '100%' }}>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ justifyContent: 'flex-start', display: 'flex', mb: 2 }}>
                        <Link underline="hover" color="inherit" href="/">Home</Link>
                        <Typography color="text.primary">Horarios</Typography>
                    </Breadcrumbs>

                    <Typography variant="h4" component="h2" gutterBottom>Lista de Horarios</Typography>

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
                            sx={{ '& .MuiDataGrid-root': { overflowX: 'auto' } }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button 
                            variant="contained"
                            sx={{ bgcolor: '#43A49B', color: 'white', textTransform: 'capitalize', '&:hover': { bgcolor: '#51C5BA' }}}
                            onClick={() => navigate("/admin-createHorarios")}
                        >
                            + Añadir horario
                        </Button>
                    </Box>
                </Box>
            </Paper>

            <Dialog open={openEdit} onClose={handleCloseEdit}>
                <DialogTitle>Editar Horario</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Nombre"
                        fullWidth
                        value={selectedHorario?.name || ''}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Fecha"
                        type="date"
                        fullWidth
                        value={selectedHorario?.fecha || ''}
                        onChange={(e) => handleInputChange('fecha', e.target.value)}
                    />
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Turno</InputLabel>
                        <Select
                            label="Turno"
                            value={selectedHorario?.turno || ''}
                            onChange={(e) => handleInputChange('turno', e.target.value)}
                        >
                            <MenuItem value="Matutino">Matutino</MenuItem>
                            <MenuItem value="Vespertino">Vespertino</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="dense"
                        label="Entrada"
                        type="time"
                        fullWidth
                        value={selectedHorario?.entrada || ''}
                        onChange={(e) => handleInputChange('entrada', e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Salida"
                        type="time"
                        fullWidth
                        value={selectedHorario?.salida || ''}
                        onChange={(e) => handleInputChange('salida', e.target.value)}
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

export default HorariosPage;
