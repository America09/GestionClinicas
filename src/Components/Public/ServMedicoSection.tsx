import { Box, Grid, Typography, TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import React from "react";

const Servicios = [
{ name: 'Consulta Médica' },
{ name: 'Análisis Clínicos' },
{ name: 'Psicología' },
{ name: 'Cardiología' },
{ name: 'Otro' },
];

export const ServMedicoSection = () => {
const [serValue, setSerValue] = React.useState(Servicios[0]);
const [serInputValue, setSerInputValue] = React.useState('');

return (
    <Box component="form"
    sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
    }}
    noValidate
    autoComplete="off"
    >
    <Typography sx={{ marginTop: 3, textAlign: 'left', fontWeight: 'semibold', fontSize: 24, color: '#263339' }}>
        Servicios Médicos
    </Typography>
    <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
        <Autocomplete
            value={serValue}
            onChange={(event, newValue) => {
            setSerValue(newValue);
            }}
            inputValue={serInputValue}
            onInputChange={(event, newInputValue) => {
            setSerInputValue(newInputValue);
            }}
            id="servicios-autocomplete"
            options={Servicios}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Servicio" />}
            sx={{ width: '100%' }}
        />
        </Grid>
    </Grid>
    </Box>
);
}
