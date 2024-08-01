import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridActionsCellItem, GridRenderCellParams } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Paper } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { handleGetPatient, handleDeletePatient } from '../../../Handlers/PatientHandler';
import { Patient } from '../../../Types/Patient';  

export const ListPacientes = () => {
  const [rows, setRows] = useState<Patient[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data: Patient[] = await handleGetPatient();
        if (data) {
          setRows(data);
        }
      } catch (error) {
        console.error('Error fetching histories', error);
      }
    };
    fetchPatients();
  }, []);

  const handleClick = (id: number) => {
    navigate(`/admin-historial/${id}`);
  };

  const handleEdit = (id: number) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas editar este paciente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Sí, editar',
      cancelButtonText: 'No, cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log(`Editing paciente with ID: ${id}`);
        } catch (error) {
          Swal.fire("Error", "Hubo un problema al editar los datos del paciente. Inténtalo de nuevo.", "error");
        }
      }
    });
  };

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar este paciente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await handleDeletePatient(id.toString());
          const data: Patient[] = await handleGetPatient();
          if (data) {
            setRows(data);
          }
          Swal.fire("Eliminado", "El paciente ha sido eliminado correctamente.", "success");
        } catch (error) {
          Swal.fire("Error", "Hubo un problema al eliminar los datos del paciente. Inténtalo de nuevo.", "error");
        }
      }
    });
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'userName', headerName: 'Nombre', width: 150, editable: true },
    { field: 'email', headerName: 'Correo', width: 180, editable: true },
    { field: 'phone', headerName: 'Teléfono', width: 180, editable: true },
    {
      field: 'Historial',
      headerName: 'Historial',
      width: 100,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <GridActionsCellItem
          icon={<MedicalServicesIcon />}
          label="Historial"
          onClick={() => handleClick(params.id as number)}
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
          onClick={() => handleDelete(params.id as number)}
        />
      ),
    },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Paper
        sx={{
          padding: 3,
          maxWidth: 1100,
          width: '100%',
          boxShadow: 3,
          borderRadius: 2,
          margin: '0 auto', 
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                <HomeIcon sx={{ mr: 0.5 }} />
                Inicio
              </Link>
              <Typography color="textPrimary">Lista de pacientes</Typography>
            </Breadcrumbs>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#408D86',
                color: 'white',
                textTransform: 'capitalize',
                '&:hover': { backgroundColor: '#004d50' },
              }}
              onClick={() => navigate("/admin-Addpacientes")}
            >
              Añadir Paciente
            </Button>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Lista de Pacientes
            </Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              autoHeight
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
