import { Box, Grid, Typography, TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import React from "react";

const estadosDeMexico = [
  { name: 'Medico 1' },
  { name: 'Medico 2' },
  { name: 'Medico 3' },
  { name: 'Medico 4' },
]; // Añadí el corchete de cierre aquí

export const DatoMedicoSection = () => {
  const [estadoValue, setEstadoValue] = React.useState(estadosDeMexico[0]);
  const [estadoInputValue, setEstadoInputValue] = React.useState('');

  return (
    <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography sx={{ marginTop: 3, textAlign: 'left', fontWeight: 'semibold', fontSize: 24, color: '#263339' }}>
        Datos del Médico
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            value={estadoValue}
            onChange={(event, newValue) => {
              setEstadoValue(newValue);
            }}
            inputValue={estadoInputValue}
            onInputChange={(event, newInputValue) => {
              setEstadoInputValue(newInputValue);
            }}
            id="estado-autocomplete"
            options={estadosDeMexico}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Médico" />}
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="input-2"
            type="number"
            label="Cédula Profesional"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
