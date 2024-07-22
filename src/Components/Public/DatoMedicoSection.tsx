import { Box, Grid, Typography, TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import React from "react";

const medicos = [
  { name: 'Medico 1' },
  { name: 'Medico 2' },
  { name: 'Medico 3' },
  { name: 'Medico 4' },
];

export const DatoMedicoSection = () => {
  const [medicoValue, setMedicoValue] = React.useState(medicos[0]);
  const [medicoInputValue, setMedicoInputValue] = React.useState('');

  return (
    <Box
      component="form"
      sx={{
        
        flexDirection: 'column',
        mt: 3,
        width: '100%' 
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
       sx={{ marginTop: 3, textAlign: 'left', marginLeft:2, fontWeight: 'semibold', fontSize: 24, color: '#263339' }}
      >
        Datos del Médico
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Autocomplete
            value={medicoValue}
            onChange={(event, newValue) => {
              setMedicoValue(newValue);
            }}
            inputValue={medicoInputValue}
            onInputChange={(event, newInputValue) => {
              setMedicoInputValue(newInputValue);
            }}
            id="medico-autocomplete"
            options={medicos}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Médico" />}
            sx={{ width: '100%' }} 
          />
        </Grid>
      </Grid>
    </Box>
  );
}
