import { Box, Grid, Typography, TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import React from "react";

const estadosDeMexico = [
  { name: 'Aguascalientes' },
  { name: 'Baja California' },
  { name: 'Baja California Sur' },
  { name: 'Campeche' },
  { name: 'Chiapas' },
  { name: 'Chihuahua' },
  { name: 'Coahuila' },
  { name: 'Colima' },
  { name: 'Ciudad de México' },
  { name: 'Durango' },
  { name: 'Guanajuato' },
  { name: 'Guerrero' },
  { name: 'Hidalgo' },
  { name: 'Jalisco' },
  { name: 'México' },
  { name: 'Michoacán' },
  { name: 'Morelos' },
  { name: 'Nayarit' },
  { name: 'Nuevo León' },
  { name: 'Oaxaca' },
  { name: 'Puebla' },
  { name: 'Querétaro' },
  { name: 'Quintana Roo' },
  { name: 'San Luis Potosí' },
  { name: 'Sinaloa' },
  { name: 'Sonora' },
  { name: 'Tabasco' },
  { name: 'Tamaulipas' },
  { name: 'Tlaxcala' },
  { name: 'Veracruz' },
  { name: 'Yucatán' },
  { name: 'Zacatecas' },
];

export const DatosSection = () => {
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
        Datos de Contacto
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="input-1"
            label="Correo"
            type="email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="input-2"
            type="number"
            label="Número de Teléfono"
            variant="outlined"
          />
        </Grid>
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
            renderInput={(params) => <TextField {...params} label="Estado" />}
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="input-3"
            label="Código Postal"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
