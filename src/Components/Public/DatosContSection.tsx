import { Box, Grid, Typography, TextField, Autocomplete } from "@mui/material";
import { useState, ChangeEvent } from "react";

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
  const [estadoValue, setEstadoValue] = useState<{ name: string } | null>(estadosDeMexico[0]);
  const [estadoInputValue, setEstadoInputValue] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [codigoPostal, setCodigoPostal] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');
  const [telefonoError, setTelefonoError] = useState<string>('');
  const [codigoPostalError, setCodigoPostalError] = useState<string>('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateTelefono = (telefono: string) => {
    const telefonoRegex = /^[0-9]{10}$/;
    return telefonoRegex.test(telefono);
  };

  const validateCodigoPostal = (codigoPostal: string) => {
    const codigoPostalRegex = /^[0-9]{5}$/;
    return codigoPostalRegex.test(codigoPostal);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('Correo no válido. Debe contener un "@" y un "."');
    } else {
      setEmailError('');
    }
  };

  const handleTelefonoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTelefono(value);
    if (!validateTelefono(value)) {
      setTelefonoError('Número de teléfono no válido. Debe tener 10 dígitos.');
    } else {
      setTelefonoError('');
    }
  };

  const handleCodigoPostalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCodigoPostal(value);
    if (!validateCodigoPostal(value)) {
      setCodigoPostalError('Código Postal no válido. Debe tener 5 dígitos.');
    } else {
      setCodigoPostalError('');
    }
  };

  return (
    <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography sx={{ marginTop: 3, textAlign: 'left', marginLeft: 2, fontWeight: 'semibold', fontSize: 24, color: '#263339' }}>
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
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="input-2"
            type="tel"
            label="Número de Teléfono"
            variant="outlined"
            value={telefono}
            onChange={handleTelefonoChange}
            error={!!telefonoError}
            helperText={telefonoError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            value={estadoValue}
            onChange={(event: any, newValue: { name: string } | null) => {
              setEstadoValue(newValue);
            }}
            inputValue={estadoInputValue}
            onInputChange={(event: ChangeEvent<HTMLInputElement>, newInputValue: string) => {
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
            value={codigoPostal}
            onChange={handleCodigoPostalChange}
            error={!!codigoPostalError}
            helperText={codigoPostalError}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
