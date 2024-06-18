import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#408D86',
    color: theme.palette.common.white,
    fontSize: 12,
    fontWeight: 'bold',
    whiteSpace: 'nowrap', // Evita el salto de línea en el contenido largo
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    whiteSpace: 'nowrap', // Evita el salto de línea en el contenido largo
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledTableContainer = styled(TableContainer)({
  maxWidth: '100%', // Ajusta el contenedor para que la tabla se extienda según el contenido
  overflowX: 'auto', // Agrega scroll horizontal si la tabla es demasiado ancha
});

const StyledTable = styled(Table)({
  tableLayout: 'auto', // Ajusta la tabla para que se adapte al contenido
});

function createData(
  nombre, apellido, disponibilidad, status, especialidad
) {
  return {
    nombre, apellido, disponibilidad, status, especialidad
  };
}

const rows = [
  createData('Dr. Juan', 'Pérez', 'Inmediata', 'Activo', 'Cirugía General'),
  createData('Dra. Ana', 'López', '1 mes', 'Activo', 'Pediatría'),
  // Agrega más filas según sea necesario
];

export default function CustomizedTables() {
  return (
    <StyledTableContainer component={Paper}>
      <StyledTable aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Apellido</StyledTableCell>
            <StyledTableCell>Disponibilidad</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Especialidad</StyledTableCell>
            <StyledTableCell>Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={`${row.nombre}-${row.apellido}`}>
              <StyledTableCell>{row.nombre}</StyledTableCell>
              <StyledTableCell>{row.apellido}</StyledTableCell>
              <StyledTableCell>{row.disponibilidad}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
              <StyledTableCell>{row.especialidad}</StyledTableCell>
              <StyledTableCell>
                <Button variant="contained" style={{ width: '25px', height: '25px', minWidth: '25px', padding: '5px', marginRight: '5px', backgroundColor: '#408D86' }}>
                  <EditIcon fontSize="small" />
                </Button>
                <Button variant="contained" style={{ width: '25px', height: '25px', minWidth: '25px', padding: '5px', backgroundColor: '#FF455B' }}>
                  <DeleteIcon fontSize="small" />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}
