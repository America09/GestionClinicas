import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Autocomplete,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Boton } from './Boton';
import { DatosSection } from './DatosContSection';
import { ServMedicoSection } from './ServMedicoSection';
import { DatoMedicoSection } from './DatoMedicoSection';

const options = ['Femenino', 'Masculino', 'Otro'];

export const CitasPage: React.FC = () => {
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const [nombreError, setNombreError] = useState('');
  const [apellidoError, setApellidoError] = useState('');
  const [descripcionError, setDescripcionError] = useState('');

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTextChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
    setter(filteredValue);
  };

  const validateForm = (): boolean => {
    let isValid = true;

    if (nombre.trim() === '') {
      setNombreError('El nombre es requerido.');
      isValid = false;
    } else {
      setNombreError('');
    }

    if (apellido.trim() === '') {
      setApellidoError('El apellido es requerido.');
      isValid = false;
    } else {
      setApellidoError('');
    }

    if (descripcion.trim() === '') {
      setDescripcionError('La descripción es requerida.');
      isValid = false;
    } else {
      setDescripcionError('');
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Formulario enviado');
    }
  };

  return (
    <Box sx={{ maxWidth: '1000px', mx: 'auto', mt: 5, p: isSmallScreen ? 2 : 3 }}>
      <Typography sx={{ marginBottom: 3, textAlign: 'center', fontWeight: 'bold', fontSize: isSmallScreen ? 28 : 40, color: '#263339' }}>
        ¡Tu salud, nuestra prioridad! 
        <br />
        Agenda tu cita hoy mismo.
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography sx={{ marginBottom: 3, textAlign: 'left', fontWeight: 'semibold', fontSize: isSmallScreen ? 20 : 24, color: '#263339' }}>
          Información del paciente
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="input-1"
              label="Nombre"
              variant="outlined"
              value={nombre}
              onChange={handleTextChange(setNombre)}
              error={!!nombreError}
              helperText={nombreError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="input-2"
              label="Apellido"
              variant="outlined"
              value={apellido}
              onChange={handleTextChange(setApellido)}
              error={!!apellidoError}
              helperText={apellidoError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="input-3"
              label="Descripción"
              variant="outlined"
              value={descripcion}
              onChange={handleTextChange(setDescripcion)}
              error={!!descripcionError}
              helperText={descripcionError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              value={value}
              onChange={(event: React.SyntheticEvent, newValue: string | null) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event: React.SyntheticEvent, newInputValue: string) => {
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
