import { Button, Box } from "@mui/material";

export const Boton = () => {
  return (


<Box sx={{ textAlign: 'center', mt: 2 }}>
<Button
  type="submit"
  fullWidth
  variant="contained"
  sx={{
    mt: 3,
    mb: 2,
    backgroundColor: '#408D86',
    color: 'white',
    '&:hover': { backgroundColor: '#004d50' },
    padding: '4px 8px', // Ajusta el padding para reducir el tamaño del botón
    minWidth: '80px', // Ancho mínimo del botón
    fontSize: '0.875rem', // Tamaño de fuente más pequeño
    height: '36px', // Altura más pequeña del botón
  }}
>
  Enviar
</Button>

        </Box>
  )
}
