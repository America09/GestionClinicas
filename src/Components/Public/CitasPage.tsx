import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Typography, TextField, Grid } from '@mui/material';
import { Boton } from './Boton';
import { DatosSection } from './DatosContSection';
import { SendTimeExtension } from '@mui/icons-material';
import { ServMedicoSection } from './ServMedicoSection';
import { DatoMedicoSection } from './DatoMedicoSection';
import Calendario from './Calendario';

const options = ['Femenino', 'Masculino', 'Otro'];

export const CitasPage = () => {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Box sx={{ maxWidth: '1000px', mx: 'auto', mt: 5 }}>
      <Typography sx={{ marginBottom: 3, textAlign: 'center', fontWeight: 'bold', fontSize: 40, color: '#263339' }}>
        ¡Tu salud, nuestra prioridad! 
        <br />
        Agenda tu cita hoy mismo.
      </Typography>
      <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off">
        <Typography sx={{ marginBottom: 3, textAlign: 'left', fontWeight: 'semibold', fontSize: 24, color: '#263339' }}>
          Información del paciente
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="input-1"
              label="Nombre"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="input-2"
              label="Apellido"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="input-3"
              label="Descripción"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              value={value}
              onChange={(event: any, newValue: string | null) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={options}
              renderInput={(params) => <TextField {...params} label="Género" />}
              sx={{ width: '100%' }}
            />
          </Grid>
        </Grid>
        <DatosSection />
        <ServMedicoSection />
        <DatoMedicoSection />
        <Boton />
        
      </Box>
    </Box>
    
  );
};

export default CitasPage;
