// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import Box from '@mui/material/Box';
// const columns: GridColDef<(typeof rows)[number]>[] = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     {
//       field: 'firstName',
//       headerName: 'First name',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'lastName',
//       headerName: 'Last name',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 110,
//       editable: true,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has  getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//     },
//   ];
  
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];
  
// export const ListPacientes = () => {
//     return (
//         <Box sx={{ width: '100%' }}>
//           <DataGrid
          
//             rows={rows}
//             columns={columns}
//             initialState={{
//               pagination: {
//                 paginationModel: {
//                   pageSize: 5,
//                 },
//               },
//             }}
//             pageSizeOptions={[5]}
//             checkboxSelection
//             disableRowSelectionOnClick
//           />
//         </Box>
//       );
//     }

import { DataGrid, GridColDef, GridActionsCellItem, GridRenderCellParams } from '@mui/x-data-grid';
import { Typography, Breadcrumbs, Link, Button, Box, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'Status', headerName: 'Status', width: 150, editable: true },
  { field: 'Disponibilidad', headerName: 'Disponibilidad', width: 180, editable: true },
  { field: 'Consultorio', headerName: 'Consultorio', width: 180, editable: true },
  {
    field: 'Editar',
    headerName: 'Editar',
    width: 100,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => (
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Edit"
        onClick={() => handleEdit(params.id as number)}
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

const rows = [
  { id: 1, Status: 'Disponible', Disponibilidad: 'Mañana', Consultorio: 'Cardiología' },
  { id: 2, Status: 'No disponible', Disponibilidad: 'Tarde', Consultorio: 'Pediatría' },
  { id: 3, Status: 'Disponible', Disponibilidad: 'Mañana', Consultorio: 'Neurología' },
  { id: 4, Status: 'Disponible', Disponibilidad: 'Tarde', Consultorio: 'Ortopedia' },
  { id: 5, Status: 'Disponible', Disponibilidad: 'Mañana', Consultorio: 'Dermatología' },
  { id: 6, Status: 'No disponible', Disponibilidad: 'Tarde', Consultorio: 'Radiología' },
  { id: 7, Status: 'Disponible', Disponibilidad: 'Mañana', Consultorio: 'Oncología' },
  { id: 8, Status: 'No disponible', Disponibilidad: 'Tarde', Consultorio: 'Cirugía General' },
  { id: 9, Status: 'Disponible', Disponibilidad: 'Mañana', Consultorio: 'Ginecología' },
];

const handleEdit = (id: number) => {
  Swal.fire({
    title: "¿Estás seguro de que deseas editar este consultorio?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: 'Sí, editar',
    cancelButtonText: 'No, cancelar',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Lógica para editar el consultorio utilizando `id`
        console.log(`Editing consultorio with ID: ${id}`);
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al editar el consultorio. Inténtalo de nuevo.", "error");
      }
    }
  });
};

const handleDelete = (id: number) => {
  Swal.fire({
    title: "¿Estás seguro de que deseas eliminar este consultorio?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Lógica para eliminar el consultorio utilizando `id`
        console.log(`Deleting consultorio with ID: ${id}`);
        Swal.fire("Eliminado", "El consultorio ha sido eliminado correctamente.", "success");
      } catch (error) {
        Swal.fire("Error", "Hubo un problema al eliminar el consultorio. Inténtalo de nuevo.", "error");
      }
    }
  });
};

export const ListPacientes = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 4 }}>
      <Paper
        sx={{
          padding: 3,
          maxWidth: 850,
          width: '100%',
          boxShadow: 3,
          borderRadius: 2,
          mt: 1,
          ml: -2, 
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', mb: 2 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
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
              //disableSelectionOnClick={true}
              autoHeight
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#408D86', color: 'white', '&:hover': { backgroundColor: '#004d50' }
              }}
              onClick={() => navigate("/agregar-consultorios")}
            >
              + Añadir Consultorios
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
